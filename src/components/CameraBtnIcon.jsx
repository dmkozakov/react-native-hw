import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { PALETTE } from "../assets/common/palette";

export default function CameraBtnIcon({ onPress, isLoading, photo }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.photoBtn} disabled={isLoading}>
      <View style={[styles.photoIcon, photo && styles.editPhoto]}>
        {isLoading ? (
          <Feather name="loader" size={24} color={PALETTE.secondaryColor} />
        ) : (
          <FontAwesome
            name="camera"
            size={24}
            color={photo ? PALETTE.primaryBgColor : PALETTE.secondaryColor}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  photoIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: PALETTE.primaryBgColor,
  },
  editPhoto: {
    backgroundColor: PALETTE.primaryBgColorTransparent,
  },
  photoBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
});
