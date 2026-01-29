import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function SignupScreen() {
  const router = useRouter();
  const handleGoogleSignup = () => {
    // Navigate to the Name Input screen
    router.push('/username'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Gradient: Matches Intro Token #381C67 -> #000000 */}
      <LinearGradient
        colors={['#381C67', '#000000']}
        locations={[0.2, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      {/* --- Back Button --- */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <AntDesign name="arrow-left" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* --- 3D Logo Block --- */}
      <View style={styles.logoContainer}>
        {/* Layer 0: Deep Shadow (Black) */}
        <Text style={[styles.logoText, styles.logoShadowDeep]}>
          TFI{'\n'}FAN
        </Text>
        
        {/* Layer 1: Mid Shadow (Dark Purple) */}
        <Text style={[styles.logoText, styles.logoShadowMid]}>
          TFI{'\n'}FAN
        </Text>
        
        {/* Layer 2: Main Face (Gradient-like Lavender) */}
        <Text style={[styles.logoText, styles.logoFace]}>
          TFI{'\n'}FAN
        </Text>
      </View>

      {/* --- Footer Section --- */}
      <View style={styles.footer}>
        
        {/* Divider with Spacing */}
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>SIGNUP VIA</Text>
          <View style={styles.line} />
        </View>

        {/* Google Button: Outline + Dark Background */}
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8} onPress={handleGoogleSignup}>
          <AntDesign name="google" size={20} color="#FFFFFF" style={styles.btnIcon} />
          <Text style={styles.googleBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Apple Button: Solid White */}
        <TouchableOpacity style={styles.appleButton} activeOpacity={0.9}>
          <AntDesign name="apple" size={20} color="#000000" style={styles.btnIcon} />
          <Text style={styles.appleBtnText}>Continue with Apple</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center', // Centers content horizontally
  },

  // --- Header ---
  backButton: {
    position: 'absolute',
    top: 60, // Matches status bar spacing
    left: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)', // Subtle border as seen in UI
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },

  // --- Typography: 3D Logo ---
  logoContainer: {
    position: 'absolute',
    top: height * 0.28, // Visual vertical center
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoText: {
    fontFamily: 'Antonio', // Primary Heading Font
    fontSize: 120, // Huge size for hero effect
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 110,
    letterSpacing: -2,
    textTransform: 'uppercase',
  },
  // The offsets create the 3D block direction (bottom-right)
  logoShadowDeep: {
    position: 'absolute',
    color: '#000000',
    transform: [{ translateX: 12 }, { translateY: 12 }], 
    zIndex: 1,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  logoShadowMid: {
    position: 'absolute',
    color: '#381C67', // Primary Purple for depth
    transform: [{ translateX: 6 }, { translateY: 6 }],
    zIndex: 2,
  },
  logoFace: {
    color: '#DCC8FF', // Accent Lavender face
    zIndex: 3,
  },

  // --- Footer Layout ---
  footer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 24, // Screen gutter
    alignItems: 'center',
  },

  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Faded line
  },
  dividerText: {
    color: '#FFFFFF',
    paddingHorizontal: 16,
    fontFamily: 'Metropolis SemiBold', // Secondary font
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '600',
  },

  // Buttons
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Full width of container (padded)
    maxWidth: 340, // Cap width for tablet/large screens
    height: 56,
    borderRadius: 100, // Pill shape
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    marginBottom: 16,
    backgroundColor: '#000000', // Explicit black background
  },
  googleBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Metropolis SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 340,
    height: 56,
    borderRadius: 100,
    backgroundColor: '#FFFFFF', // Solid White
  },
  appleBtnText: {
    color: '#000000',
    fontFamily: 'Metropolis SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  
  btnIcon: {
    marginRight: 12,
    // Optical alignment adjustment if needed
    marginTop: -2, 
  },
});