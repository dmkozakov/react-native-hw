import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { PALETTE } from "../assets/common/palette";

function CustomInput({ placeholder, style, ...props }) {
  const [isFocused, setIsfFocused] = useState(false);

  const handleFocus = () => {
    setIsfFocused(true);
  };
  const handleBLur = () => {
    setIsfFocused(false);
  };

  return (
    <TextInput
      onFocus={handleFocus}
      onBlur={handleBLur}
      style={[
        styles.input,
        style,
        {
          borderColor: isFocused ? PALETTE.accentColor : PALETTE.borderColor,
          backgroundColor: isFocused ? PALETTE.primaryBgColor : PALETTE.secondaryBgColor,
        },
      ]}
      placeholder={placeholder}
      placeholderTextColor={PALETTE.inputColor}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: PALETTE.primaryTextColor,
    borderWidth: 1,
  },
});

export default CustomInput;
