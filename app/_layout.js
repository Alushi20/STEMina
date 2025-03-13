// app/_layout.js
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import theme from '../lib/theme';
import { EventProvider } from './EventContext';

export default function Layout() {
  return (
    <EventProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.dark,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 70,
            position: 'absolute',
            left: 15,
            right: 15,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            paddingTop: 10,
            display:'none',
          },
          tabBarActiveTintColor: theme.colors.white,  // Active tab color
          tabBarInactiveTintColor: theme.colors.gray,   // Inactive tab color
          tabBarItemStyle: {
            justifyContent: 'center',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="communities_screen"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="upcoming_events_screen"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </EventProvider>
  );
}
