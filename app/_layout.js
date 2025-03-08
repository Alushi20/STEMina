import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import theme from '../lib/theme';

export default function Layout() {
  return (
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
          paddingTop: 10
        },
        tabBarActiveTintColor: theme.colors.white, // Active tab color
        tabBarInactiveTintColor: theme.colors.gray, // Inactive tab color
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
        name="screen2"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen1"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="TableCellsIcon" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
