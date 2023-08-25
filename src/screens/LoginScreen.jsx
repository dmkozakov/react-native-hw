import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";
import { PALETTE } from "../assets/common/palette";

import bgImage from "../assets/img/bgImage.jpg";
import LoginForm from "../components/LoginForm";

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        style={styles.container}
        keyboardVerticalOffset={-100}
      >
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
          <View style={styles.register}>
            <Text style={styles.title}>Увійти</Text>
            <LoginForm />
            <TouchableOpacity>
              <Text style={styles.loginBtnText}>
                Немає акаунту?
                <Text style={{ textDecorationLine: "underline" }}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingBottom: 112,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: PALETTE.primaryBgColor,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: PALETTE.primaryTextColor,
  },

  loginBtnText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginTop: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: PALETTE.secondaryTextColor,
  },
});

export default LoginScreen;
