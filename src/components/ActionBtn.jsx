import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { PALETTE } from "../assets/common/palette";

export function ActionBtn({ style, children, active, ...props }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={PALETTE.secondaryAccentColor}
      style={style}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
}
