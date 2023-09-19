import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export function User({ avatar, name, email }) {
  return (
    <View style={styles.user}>
      <Image source={avatar} style={styles.userPhoto} />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userName: {
    fontFamily: "Roboto-700",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-400",
    fontSize: 11,
  },
});
