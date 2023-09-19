import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { PALETTE } from "../assets/common/palette";
import { useNavigation } from "@react-navigation/native";

export function LogoutBtn() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.logoutBtn}
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
      <Feather name="log-out" size={24} color={PALETTE.secondaryColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});
