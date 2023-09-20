import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../assets/styles/styles";

import { Feather } from "@expo/vector-icons";

import { PALETTE } from "../assets/common/palette";
import { useNavigation } from "@react-navigation/core";

export function Post({ photo, description, likes, comments, location }) {
  const navigation = useNavigation();

  onLocationPress = () => {
    navigation.navigate("MapScreen");
  };

  onCommentPress = () => {
    navigation.navigate("CommentsScreen");
  };
  return (
    <View style={styles.post}>
      <Image source={photo} style={styles.postImage} />
      <Text style={[globalStyles.text, styles.description]}>{description}</Text>

      <View style={styles.postInfo}>
        <View style={styles.actionBoxWrapper}>
          <TouchableOpacity style={styles.actionBox} onPress={onCommentPress}>
            <Feather name="message-circle" size={24} color={PALETTE.accentColor} />
            <Text style={globalStyles.text}>{likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}>
            <Feather name="thumbs-up" size={24} color={PALETTE.accentColor} />
            <Text style={globalStyles.text}>{comments}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.locationBox} onPress={onLocationPress}>
          <Feather name="map-pin" size={24} color={PALETTE.secondaryColor} />
          <Text style={[globalStyles.text, styles.location]}>{location}</Text>
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
