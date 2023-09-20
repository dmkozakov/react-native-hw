import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { PALETTE } from "../assets/common/palette";
import { globalStyles } from "../assets/styles/styles";

export function PhotoBox({ photoUri, onPress }) {
  return (
    <View>
      <View style={styles.photoBox}>
        <Image source={{ uri: photoUri }} style={styles.photo} />
        <TouchableOpacity onPress={onPress} style={styles.editBtn}>
          <View style={[styles.photoIcon, styles.editPhoto]}>
            <FontAwesome name="camera" size={24} color={PALETTE.primaryBgColor} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[globalStyles.text, styles.photoText]}>Редагувати фото</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photoBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: PALETTE.secondaryBgColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: PALETTE.borderColor,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  photoIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: PALETTE.primaryBgColor,
  },
  photoText: {
    marginTop: 8,
    color: PALETTE.secondaryColor,
  },
  editPhoto: {
    backgroundColor: PALETTE.primaryBgColorTransparent,
  },
  editBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
});
