import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../assets/styles/styles";

import { Feather } from "@expo/vector-icons";

import mountain from "../assets/img/mountain.jpg";
import { PALETTE } from "../assets/common/palette";

export function Post() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
