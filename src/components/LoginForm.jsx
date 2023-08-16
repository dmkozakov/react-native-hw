import React, { useState } from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";
import { TextBtn } from "./TextBtn";
import CustomInput from "./CustomInput";

function LoginForm() {
  return (
    <>
      <View style={styles.form}>
        <CustomInput style={[styles.input]} placeholder="Адреса електронної пошти" />
        <View position="relative">
          <CustomInput placeholder="Пароль" type="password" style={[styles.input]} />
          <TextBtn text={"Показати"} style={styles.showBtn} />
        </View>
      </View>
      <ActionBtn onPress={() => console.log("Увійти")} style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Увійти</Text>
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
    borderRadius: 8,
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

export default LoginForm;
