import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <>
      {/* Global Status Bar Settings - Light text for dark background */}
      <StatusBar style="light" backgroundColor={Colors.dark.background} />

      <Stack
        screenOptions={{
          headerShown: false, // We hide default headers to use our custom UI
          contentStyle: { backgroundColor: Colors.dark.background },
          animation: 'slide_from_right',
        }}
      >
        {/* 1. Onboarding / Welcome Screen */}
        <Stack.Screen name="index" />

        {/* 2. Signup / Auth Screen */}
        <Stack.Screen name="signup" />

        {/* 3. Main App Tabs (Dashboard, etc.) */}
        <Stack.Screen name="(tabs)" />

        {/* 4. Modal (Optional, based on your file structure) */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </>
  );
}