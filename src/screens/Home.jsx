import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { PALETTE } from "../assets/common/palette";
import { ActionBtn } from "../components/ActionBtn";
import { View } from "react-native";
import CustomHeader from "../components/CustomHeader";

// ...

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      backBehavior="order"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ProfileScreen") {
            iconName = "user";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "plus";
          } else if (route.name === "PostsScreen") {
            iconName = "grid";
          }

          return (
            <View style={[styles.icon, focused && styles.iconActive]}>
              <Feather name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: PALETTE.primaryBgColor,
        tabBarInactiveTintColor: PALETTE.primaryTransparentColor,
        tabBarShowLabel: false,
        tabBarStyle: { height: 83, paddingTop: 10, paddingBottom: 22 },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <CustomHeader title={title} logoutBtn />;
          },
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <CustomHeader title={title} backBtn navigation={navigation} />;
          },
          tabBarStyle: {
            position: "absolute",
            bottom: -40,
            height: 0,
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  iconActive: {
    backgroundColor: PALETTE.accentColor,
  },
});

export default Home;
