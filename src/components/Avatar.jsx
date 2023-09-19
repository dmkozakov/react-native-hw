import React from "react";
import { PALETTE } from "../assets/common/palette";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";

export function Avatar({ photo = null }) {
  return (
    <View style={styles.avatarBox}>
      {photo && <Image source={photo} style={styles.avatar} />}
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Add photo");
        }}
      >
        <Feather
          name="plus-circle"
          size={25}
          style={[styles.addAvatarBtn, photo && styles.addAvatarBtnActive]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarBox: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    color: PALETTE.accentColor,
    borderRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
  },
  addAvatarBtnActive: {
    transform: [{ rotate: "45deg" }],
    color: PALETTE.secondaryColor,
    backgroundColor: PALETTE.primaryBgColor,
  },
});
