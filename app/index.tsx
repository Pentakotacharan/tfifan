import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { PrimaryButton } from '@/components/PrimaryButton';
import { OnboardingProgress } from '@/components/OnboardingProgress';

export default function WelcomeScreen() {
  const handleCreateAccount = () => {
    // Navigate to next auth step or tabs
    // router.push('/(tabs)'); 
    router.push('/signup');
    console.log("Create Account Pressed");
  };

  const handleLogin = () => {
    // Navigate to login modal or screen
    // router.push('/login');
    console.log("Login Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
  
      {/* Top Section: Progress Bar */}
      <View style={styles.header}>
        <OnboardingProgress totalSteps={4} currentStep={2} />
      </View>

      {/* Middle Section: Typography / Hero */}
      <View style={styles.content}>
        <Text style={styles.introText}>Introducing</Text>
        <Text style={styles.titleText}>TFIFAN</Text>
        <Text style={styles.taglineText}>CREATED FOR CULTS BY A CULT</Text>
      </View>

      {/* Bottom Section: Actions */}
      <View style={styles.footer}>
        <PrimaryButton 
          title="Create Your Free Account" 
          onPress={handleCreateAccount} 
        />
        <PrimaryButton 
          title="LOGIN TO EXISITING ACCOUNT" 
          variant="text" 
          onPress={handleLogin}
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  introText: {
    color: Colors.dark.text,
    fontSize: 32,
    fontFamily: 'serif', // Matches the serif style in the image
    marginBottom: -5,    // Tighten spacing to the big title
  },
  titleText: {
    color: Colors.dark.text,
    fontSize: 84,        // Very large hero text
    fontWeight: '900',
    fontFamily: 'sans-serif-condensed', // condensed look
    textTransform: 'uppercase',
    letterSpacing: -2,
    lineHeight: 90,
  },
  taglineText: {
    color: Colors.dark.text,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 10,
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
});