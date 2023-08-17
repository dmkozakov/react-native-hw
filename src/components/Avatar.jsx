import React from "react";
import { PALETTE } from "../assets/common/palette";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Avatar() {
  return (
    <View style={styles.avatar}>
      <TouchableWithoutFeedback>
        <Feather name="plus-circle" size={25} style={styles.addAvatarBtn} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    alignSelf: "center",
    top: -76,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: PALETTE.secondaryBgColor,
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
});
