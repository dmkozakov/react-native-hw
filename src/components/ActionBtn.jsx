import React from "react";
import { Text, TouchableHighlight } from "react-native";

export function ActionBtn({ style, children, ...props }) {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#ffa667" style={style} {...props}>
      {children}
    </TouchableHighlight>
  );
}
