import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

// Screen Dimensions used to verify centering if needed, 
// though we rely on Flex centering for 'x: center' items.
const { width } = Dimensions.get('window');

export default function IntroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Gradient */}
      <LinearGradient
        // JSON: top-to-bottom, #381C67 (40.591%) -> #000000 (100%)
        colors={['#381C67', '#000000']}
        locations={[0.40591, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      {/* --- Progress Bars (Top: 51px) --- */}
      {/* JSON defines 3 explicit bars, implied 4th based on spacing/pattern */}
      {/* <View style={[styles.progressBar, { left: 12, backgroundColor: '#FFFFFF' }]} />
      <View style={[styles.progressBar, { left: 115, backgroundColor: '#FFFFFF' }]} />
      <View style={[styles.progressBar, { left: 218, backgroundColor: '#604F80' }]} />
      <View style={[styles.progressBar, { left: 321, backgroundColor: '#604F80' }]} /> */}

      {/* --- Typography Group --- */}
      
      {/* Heading: "Introducing" (y: 333) */}
      <Text style={styles.headingText}>Introducing</Text>

      {/* Main Logo: "TFIFAN" (y: 355) */}
      <Text style={styles.logoText}>TFIFAN</Text>

      {/* Tagline: "CREATED FOR CULTS..." (y: 477) */}
      <Text style={styles.taglineText}>CREATED FOR CULTS BY A CULT</Text>

      {/* --- CTA Button (y: 770) --- */}
      <View style={styles.ctaWrapper}>
        {/* Hard Shadow Layer (Offset: -3, 3) */}
        <View style={styles.ctaShadow} />
        
        {/* Main Button Layer */}
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => router.push('/signup')}
          style={styles.ctaButtonContainer}
        >
          <LinearGradient
            colors={['#573199', '#341D5D']}
            style={styles.ctaGradient}
          >
            <Text style={styles.ctaText}>Create Your Free Account</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* --- Secondary Link (y: 868) --- */}
      <TouchableOpacity 
        style={styles.loginLinkWrapper}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.loginLinkText}>LOGIN TO EXISTING ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fallback
  },
  // --- Progress Bar Styles ---
  progressBar: {
    position: 'absolute',
    top: 51,
    width: 96,
    height: 6,
    borderRadius: 10,
  },
  // --- Typography Styles ---
  headingText: {
    position: 'absolute',
    top: 250,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Zin Display Condensed Demo', // Ensure font is loaded
    fontWeight: '400',
    fontSize: 35,
    color: '#FFFFFF',
    lineHeight: 32, // explicit line height helps positioning
    zIndex: 2,
  },
  logoText: {
    position: 'absolute',
    top: 280,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Antonio', // Ensure font is loaded
    fontWeight: '700',
    fontSize: 76,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    // Line height adjustment might be needed depending on font metrics to match overlap
    lineHeight: 96, 
    zIndex: 1,
  },
  taglineText: {
    position: 'absolute',
    top: 360,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Zin Display Condensed Demo',
    fontWeight: '400',
    fontSize: 15,
    color: '#FFFFFF',
    zIndex: 2,
  },
  // --- CTA Button Styles ---
  ctaWrapper: {
    position: 'absolute',
    top: 640,
    alignSelf: 'center',
    width: 300,
    height: 65,
    
  },
  ctaShadow: {
    position: 'absolute',
    width: 280,
    height: 65,
    borderRadius: 100,
    backgroundColor: '#DCC8FF',
    // JSON Shadow: Offset X -3, Y 3
    top: 3,
    left:6
  },
  ctaButtonContainer: {
    width: 280,
    height: 65,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#DCC8FF',
    overflow: 'hidden', // clips the gradient
    left:7,
  },
  ctaGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    fontFamily: 'Zin Display Condensed Demo',
    fontWeight: '400',
    fontSize: 17,
    color: '#FFFFFF',
   
  },
  // --- Login Link Styles ---
  loginLinkWrapper: {
    position: 'absolute',
    top: 730,
    width: '100%',
    alignItems: 'center',
  },
  loginLinkText: {
    fontFamily: 'Metropolis SemiBold',
    fontWeight: '600',
    fontSize: 12,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.48,
  },
});