import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import bgImage from "../assets/img/bgImage.jpg";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.register}>
          <View alignItems="center">
            <View style={styles.avatar}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ffa667"
                onPress={() => console.log("Зареєструватися")}
                style={styles.addAvatarBtn}
              >
                <View style={styles.addAvatarBtnBox}>
                  <Text>+</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>
            <View position="relative">
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
              ></TextInput>
              <TouchableOpacity>
                <Text style={styles.showBtn}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ffa667"
            onPress={() => console.log("Зареєструватися")}
            style={styles.registerBtn}
          >
            <Text style={styles.registerBtnText}>Зареєструватися</Text>
          </TouchableHighlight>
          <TouchableOpacity>
            <Text style={styles.loginBtnText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
  avatar: {
    position: "absolute",
    transform: "translateY(-76px)",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatarBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 15,
  },
  addAvatarBtnBox: {
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: "#212121",
  },
  register: {
    position: "relative",
    flex: 0.65,
    flexDirection: "column",
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
  },
  form: {
    // flexDirection: "column",
    gap: 16,
  },
  input: {
    fontSize: 16,
    padding: 16,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  showBtn: {
    position: "absolute",
    right: 16,
    bottom: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: "#1B4371",
  },
  registerBtn: {
    width: "100%",
    marginTop: 43,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registerBtnText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  loginBtnText: {
    marginTop: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
