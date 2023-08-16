import { PALETTE } from "../assets/common/palette";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export function Avatar() {
  return (
    <View style={styles.avatar}>
      <TouchableWithoutFeedback>
        <View style={styles.addAvatarBtnBox}>
          <Text style={styles.addAvatarIcon}>+</Text>
        </View>
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
  addAvatarBtnBox: {
    position: "absolute",
    right: -12.5,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: PALETTE.accentColor,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
  },
  addAvatarIcon: {
    // width: 20,
    // height: 20,

    fontSize: 20,
    color: PALETTE.accentColor,
  },
});
