import React from "react";

import CommentsScreen from "../screens/CommentsScreen";
import CustomHeader from "../components/CustomHeader";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MapScreen from "../screens/MapScreen";

import { getHeaderTitle } from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack";

const Root = createStackNavigator();

export function MainNavigator() {
  return (
    <Root.Navigator initialRouteName="Login" backBehavior="history">
      <Root.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Root.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Root.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Root.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} backBtn navigateTo="BottomNavigator" />;
          },
        }}
      />
      <Root.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} backBtn navigateTo="BottomNavigator" />;
          },
        }}
      />
    </Root.Navigator>
  );
}
