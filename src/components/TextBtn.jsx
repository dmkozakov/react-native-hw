import { PALETTE } from "../assets/common/palette";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/styles/styles";

export function TextBtn({ text, style, onPress, ...props }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[globalStyles.text, styles.baseStyles, style]} {...props}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseStyles: {
    color: PALETTE.secondaryTextColor,
  },
});
