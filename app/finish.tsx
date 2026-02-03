import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function FinishScreen() {
  const router = useRouter();

  const handleGoHome = () => {
    // Navigate to the main Tabs (Home/Dashboard)
    // Make sure you have the (tabs) folder set up
    router.push('/(tabs)'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#1A0B2E', '#000000']}
        locations={[0.0, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      {/* Centered Content */}
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={handleGoHome}
          activeOpacity={0.8}
        >
          <LinearGradient
             colors={['#573199', '#341D5D']}
             style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Go Home</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  homeButton: {
    width: '100%',
    maxWidth: 335,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#7A54A6',
    // Add glowing shadow effect
    shadowColor: '#573199',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  gradientBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Zin Display Condensed Demo', // or 'System' if font not loaded
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});