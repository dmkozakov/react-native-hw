import { PALETTE } from "../assets/common/palette";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function TextBtn({ text, style, ...props }) {
  return (
    <TouchableOpacity>
      <Text style={[styles.baseStyles, style]} {...props}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseStyles: {
    fontFamily: "Roboto",
    fontWeight: "400",
    color: PALETTE.secondaryTextColor,
  },
});
