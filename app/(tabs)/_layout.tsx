import { Tabs } from "expo-router";
import React from "react";

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: true,
          tabBarLabel: "Home",
          tabBarInactiveTintColor: "#C4C4C4",
          tabBarActiveTintColor: "#00A651",

          tabBarIcon: ({ color, focused }) => (
            <Feather
              size={24}
              name="home"
              className=" font-extralight"
              color={focused ? "#00A651" : "#C4C4C4"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarInactiveTintColor: "#C4C4C4",
          tabBarActiveTintColor: "#00A651",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={24}
              name="search"
              color={focused ? "#00A651" : "#C4C4C4"}
              className="font-extralight"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarInactiveTintColor: "#C4C4C4",
          tabBarActiveTintColor: "#00A651",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              size={24}
              name="shopping-bag"
              color={focused ? "#00A651" : "#C4C4C4"}
              className="font-extralight"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarInactiveTintColor: "#C4C4C4",
          tabBarActiveTintColor: "#00A651",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/icons/avatar.png")}
              style={{ resizeMode: "contain" }}
              className="w-6"
              alt=""
            />
          ),
        }}
      />
    </Tabs>
  );
}
