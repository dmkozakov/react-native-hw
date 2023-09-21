import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainNavigator } from "./src/routes/MainNavigator";
import { BottomNavigator } from "./src/routes/BottomNavigator";

import { LocationProvider } from "./src/hooks/useLocation";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocationProvider>
          <NavigationContainer>
            <MainStack.Navigator initialRouteName="Login" backBehavior="history">
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
        </LocationProvider>
      </PersistGate>
    </Provider>
  );
}
