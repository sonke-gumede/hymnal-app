import React from "react";
import { Tabs } from "expo-router";

import HomeIcon from "@/components/Icons/homeIcon";
import DiscoverIcon from "@/components/Icons/discoverIcon";
import SettingsIcon from "@/components/Icons/settingsIcon";
import Header from "@/container/Header";
import { useTheme } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            backgroundColor: theme.colors.transparent.dark,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: theme.colors.primary.gold,
          tabBarInactiveTintColor: theme.colors.primary.white,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: true,
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="dicover"
          options={{
            title: "Discover",
            tabBarIcon: ({ color }) => <DiscoverIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
