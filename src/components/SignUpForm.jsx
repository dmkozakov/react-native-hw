import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";
import { TextBtn } from "./TextBtn";
import CustomInput from "./CustomInput";

export function SignUpForm() {
  return (
    <>
      <View style={styles.form}>
        <CustomInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor={PALETTE.inputColor}
        />
        <CustomInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor={PALETTE.inputColor}
        />
        <View position="relative">
          <CustomInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor={PALETTE.inputColor}
          />
          <TextBtn text={"Показати"} style={styles.showBtn} />
        </View>
      </View>
      <ActionBtn onPress={() => console.log("Зареєструватися")} style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Зареєструватися</Text>
      </ActionBtn>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
  },
  input: {
    fontSize: 16,
    padding: 16,
    height: 50,
    color: PALETTE.primaryTextColor,
    backgroundColor: PALETTE.secondaryBgColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: PALETTE.borderColor,
  },
  showBtn: {
    position: "absolute",
    right: 16,
    bottom: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: PALETTE.secondaryTextColor,
  },

  registerBtn: {
    width: "100%",
    marginTop: 43,
    padding: 16,
    borderRadius: 100,
    backgroundColor: PALETTE.accentColor,
  },
  registerBtnText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: PALETTE.primaryBgColor,
  },
});
