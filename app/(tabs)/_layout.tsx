import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from 'styled-components'
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import HomeIcon from '@/components/Icons/homeIcon';
import DiscoverIcon from '@/components/Icons/discoverIcon';
import SettingsIcon from '@/components/Icons/settingsIcon';
import Header from '@/container/Header';


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: theme.colors.primary.dark },
        tabBarActiveTintColor: theme.colors.primary.gold,
        tabBarInactiveTintColor: theme.colors.primary.white,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        header: ({ navigation }) => <Header navigation={navigation} />
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color}/>,
        }}
      />
      <Tabs.Screen
        name="dicover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <DiscoverIcon color={color}/>
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <SettingsIcon color={color}/>
        }}
      />
    </Tabs>
  );
}
