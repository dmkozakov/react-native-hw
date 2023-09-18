import React, { useState } from "react";
import { PALETTE } from "../assets/common/palette";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

import bgImage from "../assets/img/bgImage.jpg";
import { Avatar } from "../components/Avatar";

import userPhoto from "../assets/img/userPhoto.jpg";

import { useNavigation } from "@react-navigation/native";
import { Post } from "../components/Post";
import { LogoutBtn } from "../components/LogoutBtn";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

import mountain from "../assets/img/mountain.jpg";

const mock = [
  { id: 1, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
  { id: 2, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
  { id: 3, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
  { id: 4, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
  { id: 5, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
  { id: 6, img: mountain, text: "Ліс", comments: "8", likes: "153", location: "Ukraine" },
];

function ProfileScreen() {
  const navigation = useNavigation();

  onCommentPress = () => {
    navigation.navigate("CommentsScreen");
  };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.profile}>
        <Avatar photo={userPhoto} />
        <Text style={styles.title}>Natali Romanova</Text>

        <LogoutBtn />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsContainer}
          data={mock}
          renderItem={({ item }) => (
            <Post
              photo={item.img}
              description={item.text}
              likes={item.likes}
              comments={item.comments}
              location={item.location}
            />
          )}
          keyExtractor={item => item.id}
        ></FlatList>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  profile: {
    flex: 0.8,
    position: "relative",
    paddingBottom: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
  },
  title: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-500",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.3,
    color: PALETTE.primaryTextColor,
  },
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  postsContainer: {
    paddingHorizontal: 16,
    gap: 32,
  },
});

export default ProfileScreen;
