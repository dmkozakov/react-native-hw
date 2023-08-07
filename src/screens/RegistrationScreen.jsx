import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import bgImage from "../img/bgImage.jpg";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.register}>
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
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
              ></TextInput>
              <Text style={styles.showBtn}>Показати</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerBtnText}>Зареєструватися</Text>
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
  title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  register: {
    flex: 0.65,
    flexDirection: "column",
    gap: 43,
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
  },
  form: {
    flex: 1,
    flexDirection: "column",
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
});

export default RegistrationScreen;
