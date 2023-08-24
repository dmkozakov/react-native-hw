import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";
import { TextBtn } from "./TextBtn";
import CustomInput from "./CustomInput";

export function SignUpForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showPasswordText, setShowPasswordText] = useState("Показати");

  const onShowPassword = () => {
    setSecureTextEntry(!secureTextEntry);
    showPasswordText === "Показати"
      ? setShowPasswordText("Приховати")
      : setShowPasswordText("Показати");
  };

  const onSubmit = () => {
    console.log({ login, email, password });
  };

  return (
    <>
      <View style={styles.form}>
        <CustomInput
          value={login}
          onChangeText={setLogin}
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor={PALETTE.inputColor}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor={PALETTE.inputColor}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <View position="relative">
          <CustomInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor={PALETTE.inputColor}
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
          />
          <TextBtn onPress={onShowPassword} text={showPasswordText} style={styles.showBtn} />
        </View>
      </View>
      <ActionBtn onPress={onSubmit} style={styles.registerBtn}>
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
