import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CommentsScreen from "./src/screens/CommentsScreen";
import CustomHeader from "./src/components/CustomHeader";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import ProfileScreen from "./src/screens/ProfileScreen";
import MapScreen from "./src/screens/MapScreen";

import { getHeaderTitle } from "@react-navigation/elements";
import { MainNavigator } from "./src/routes/MainNavigator";
import { BottomNavigator } from "./src/routes/BottomNavigator";

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
        <MainStack.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
