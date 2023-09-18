import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";

import { Feather } from "@expo/vector-icons";

export function CommentBar() {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <TextInput
        placeholder="Коментувати..."
        placeholderTextColor={PALETTE.secondaryColor}
        style={styles.input}
      />
      <ActionBtn style={styles.sendBtn} onPress={onSendComment}>
        <Feather name="arrow-up" size={22} color={PALETTE.primaryBgColor} />
      </ActionBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-500",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: PALETTE.borderColor,
    color: PALETTE.primaryTextColor,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  sendBtn: {
    position: "absolute",
    top: 8,
    right: 24,
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: PALETTE.accentColor,
  },
});
