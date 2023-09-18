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

        <ScrollView contentContainerStyle={styles.postsContainer}>
          <Post />
        </ScrollView>
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
  },
});

export default ProfileScreen;
