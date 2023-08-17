import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PALETTE } from "../assets/common/palette";
import { TextBtn } from "../components/TextBtn";
import { Avatar } from "../components/Avatar";
import { SignUpForm } from "../components/SignUpForm";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";

import bgImage from "../assets/img/bgImage.jpg";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
          <View style={styles.register}>
            <Avatar />
            <Text style={styles.title}>Реєстрація</Text>
            <SignUpForm />
            <TextBtn text={"Вже є акаунт? Увійти"} style={styles.loginBtnText} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  register: {
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
  },
  title: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: PALETTE.primaryTextColor,
  },
  loginBtnText: {
    marginTop: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: PALETTE.secondaryTextColor,
  },
});

export default RegistrationScreen;
