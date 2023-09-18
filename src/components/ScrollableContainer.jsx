import React from "react";
import { ScrollView } from "react-native";

export function ScrollableContainer({ children, ...props }) {
  return <ScrollView {...props}>{children}</ScrollView>;
}
