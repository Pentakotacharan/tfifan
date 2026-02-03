import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopWidth: 0,
            height: 70, // Height to match design
            paddingBottom: 12,
            paddingTop: 12,
          },
          tabBarActiveTintColor: '#AC8EFC', // Light Purple (Active)
          tabBarInactiveTintColor: '#666666', // Grey (Inactive)
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: 'Metropolis SemiBold',
            marginTop: 4,
          },
        }}
      >
        {/* 1. HOME */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "home" : "home"} size={26} color={color} />
            ),
          }}
        />

        {/* 2. EXPLORE */}
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={26} color={color} />
            ),
          }}
        />

        {/* 3. ARENA (Stadium Icon) */}
        <Tabs.Screen
          name="arena"
          options={{
            title: 'Arena',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="stadium" size={26} color={color} />
            ),
          }}
        />

        {/* 4. WAR ZONE (Crossed Swords Icon) */}
        <Tabs.Screen
          name="warzone"
          options={{
            title: 'War Zone',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="sword-cross" size={26} color={color} />
            ),
          }}
        />

        {/* 5. RATINGS (Bar Chart Icon) */}
        <Tabs.Screen
          name="ratings"
          options={{
            title: 'Ratings',
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" size={26} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}