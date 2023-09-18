import React, { useState } from "react";
import { PALETTE } from "../assets/common/palette";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";

import bgImage from "../assets/img/bgImage.jpg";
import { Avatar } from "../components/Avatar";

import userPhoto from "../assets/img/userPhoto.jpg";
import mountain from "../assets/img/mountain.jpg";

import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../assets/styles/styles";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Feather name="log-out" size={24} color={PALETTE.secondaryColor} />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.postsContainer}>
          <View style={styles.post}>
            <Image source={mountain} style={styles.postImage} />
            <Text style={[globalStyles.text, styles.description]}>Ліс</Text>

            <View style={styles.postInfo}>
              <View style={styles.actionBoxWrapper}>
                <TouchableOpacity style={styles.actionBox} onPress={onCommentPress}>
                  <Feather name="message-circle" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBox}>
                  <Feather name="thumbs-up" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>153</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.locationBox}>
                <Feather name="map-pin" size={24} color={PALETTE.secondaryColor} />
                <Text style={[globalStyles.text, styles.location]}>Ukraine</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.post}>
            <Image source={mountain} style={styles.postImage} />
            <Text style={[globalStyles.text, styles.description]}>Ліс</Text>

            <View style={styles.postInfo}>
              <View style={styles.actionBoxWrapper}>
                <TouchableOpacity style={styles.actionBox}>
                  <Feather name="message-circle" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBox}>
                  <Feather name="thumbs-up" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>153</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.locationBox}>
                <Feather name="map-pin" size={24} color={PALETTE.secondaryColor} />
                <Text style={[globalStyles.text, styles.location]}>Ukraine</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.post}>
            <Image source={mountain} style={styles.postImage} />
            <Text style={[globalStyles.text, styles.description]}>Ліс</Text>

            <View style={styles.postInfo}>
              <View style={styles.actionBoxWrapper}>
                <TouchableOpacity style={styles.actionBox}>
                  <Feather name="message-circle" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBox}>
                  <Feather name="thumbs-up" size={24} color={PALETTE.accentColor} />
                  <Text style={globalStyles.text}>153</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.locationBox}>
                <Feather name="map-pin" size={24} color={PALETTE.secondaryColor} />
                <Text style={[globalStyles.text, styles.location]}>Ukraine</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  profile: {
    flex: 0.8,
    position: "relative",
    // paddingTop: 420,
    // paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
    paddingBottom: 16,
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
    gap: 32,
    paddingHorizontal: 16,
  },
  post: {
    gap: 8,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  description: {
    fontFamily: "Roboto-500",
    fontSize: 16,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionBoxWrapper: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  actionBox: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  location: {
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
