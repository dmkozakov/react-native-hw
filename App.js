import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import ProfileScreen from "./src/screens/ProfileScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-700": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-500": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-400": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <MainStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
