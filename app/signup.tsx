import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';

const { height, width } = Dimensions.get('window');

// JSON Design Tokens
const TOKENS = {
  colors: {
    gradientStart: '#1A0B2E',
    gradientEnd: '#000000',
    textPrimary: '#FFFFFF',
    textInverse: '#000000',
    divider: '#4A4A4A',
    logoFaceStart: '#D9C6FF',
    logoFaceEnd: '#AC8EFC',
    logoShadow: '#000000',
  },
  typography: {
    logoHero: {
      fontFamily: 'Antonio',
      fontSize: 128,
      lineHeight: 108,
      letterSpacing: -4,
    },
    buttonLabel: {
      fontFamily: 'Metropolis SemiBold',
      fontSize: 17,
      lineHeight: 20,
    },
    dividerLabel: {
      fontFamily: 'Metropolis SemiBold',
      fontSize: 12,
      letterSpacing: 1.2,
    }
  },
  spacing: {
    gutter: 24,
    stackGap: 16,
    logoTopPercent: 0.28,
    footerBottom: 50,
  },
  components: {
    backBtnSize: 59,
    authBtnHeight: 56,
    authBtnRadius: 100,
    authBtnMaxWidth: 335,
    shadowOffset: 13, // px
  }
};

export default function SignupScreen() {
  const router = useRouter();

   // Update this function
  const handleGoogleSignup = () => {
    // Navigate to the Name Input screen
    router.push('/username'); 
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* 1. Background Gradient */}
      <LinearGradient
        colors={[TOKENS.colors.gradientStart, TOKENS.colors.gradientEnd]}
        locations={[0.0, 1.0]} // Smooth top-to-bottom
        style={StyleSheet.absoluteFill}
      />

      {/* 2. Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <AntDesign name="arrow-left" size={25} color={TOKENS.colors.textPrimary} />
      </TouchableOpacity>

      {/* 3. 3D Logo Block */}
      <View style={styles.logoContainer}>
        {/* Layer A: Hard Extrusion Shadow (Black) */}
        <Text style={[styles.logoBase, styles.logoShadow]}>
          TFI{'\n'}FAN
        </Text>
        
        {/* Layer B: Gradient Face (Top Layer) */}
        <View style={styles.logoFaceWrapper}>
           <MaskedView
            style={styles.maskedView}
            maskElement={
              <Text style={styles.logoBase}>
                TFI{'\n'}FAN
              </Text>
            }
          >
            <LinearGradient
              colors={[TOKENS.colors.logoFaceStart, TOKENS.colors.logoFaceEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ flex: 1 }}
            />
          </MaskedView>
        </View>
      </View>

      {/* 4. Footer Section */}
      <View style={styles.footer}>
        
        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>SIGNUP VIA</Text>
          <View style={styles.line} />
        </View>

        {/* 5. Google Button */}
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8} onPress={handleGoogleSignup}>
    <Text style={styles.googleBtnText}>Continue with Google</Text>
</TouchableOpacity>

        {/* 6. Apple Button */}
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
    backgroundColor: TOKENS.colors.gradientEnd,
    alignItems: 'center',
  },

  // --- Back Button ---
  backButton: {
    position: 'absolute',
    top: 60, // Safe Area estimate
    left: TOKENS.spacing.gutter,
    width: TOKENS.components.backBtnSize,
    height: TOKENS.components.backBtnSize,
    borderRadius: TOKENS.components.backBtnSize / 2,
    borderWidth: 1,
    borderColor: TOKENS.colors.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  // --- Logo Typography ---
  logoContainer: {
    position: 'absolute',
    top: height * TOKENS.spacing.logoTopPercent,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, 
    height: 250, // Enough height for the stacked text + shadow
  },
  logoBase: {
    fontFamily: TOKENS.typography.logoHero.fontFamily,
    fontSize: TOKENS.typography.logoHero.fontSize,
    fontWeight: '700', // matches Antonio Bold
    textAlign: 'center',
    lineHeight: TOKENS.typography.logoHero.lineHeight,
    letterSpacing: TOKENS.typography.logoHero.letterSpacing,
    textTransform: 'uppercase',
  },
  // The Black Shadow (Offset based on JSON)
  logoShadow: {
    position: 'absolute',
    color: TOKENS.colors.logoShadow,
    transform: [
      { translateX: TOKENS.components.shadowOffset }, 
      { translateY: TOKENS.components.shadowOffset }
    ], 
    zIndex: 1,
    // Note: React Native textShadow doesn't create a hard block, so we use the transform offset above.
    // Adding a subtle shadow prop helps fill gaps if font rendering is thin.
    textShadowColor: TOKENS.colors.logoShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  // The Masked Gradient Face
  logoFaceWrapper: {
    position: 'absolute',
    zIndex: 2,
    transform: [{ translateX: 0 }, { translateY: 0 }], 
  },
  maskedView: {
    height: 250, 
    width: 300,
  },

  // --- Footer ---
  footer: {
    position: 'absolute',
    bottom: TOKENS.spacing.footerBottom,
    width: '100%',
    paddingHorizontal: TOKENS.spacing.gutter,
    alignItems: 'center',
  },
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
    backgroundColor: TOKENS.colors.divider,
  },
  dividerText: {
    color: TOKENS.colors.textPrimary,
    paddingHorizontal: 16,
    fontFamily: TOKENS.typography.dividerLabel.fontFamily,
    fontSize: TOKENS.typography.dividerLabel.fontSize,
    letterSpacing: TOKENS.typography.dividerLabel.letterSpacing,
    textTransform: 'uppercase',
    fontWeight: '600',
  },

  // --- Buttons ---
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: TOKENS.components.authBtnMaxWidth,
    height: TOKENS.components.authBtnHeight,
    borderRadius: TOKENS.components.authBtnRadius,
    borderWidth: 1.5,
    borderColor: TOKENS.colors.textPrimary, // White border
    marginBottom: TOKENS.spacing.stackGap,
    backgroundColor: '#000000', // Black BG
  },
  btnIconImage: {
    width: 20,
    height: 20,
    marginRight: 12,
    resizeMode: 'contain', // Keeps the G aspect ratio correct
  },
  googleBtnText: {
    color: TOKENS.colors.textPrimary, // White text
    fontFamily: TOKENS.typography.buttonLabel.fontFamily,
    fontSize: TOKENS.typography.buttonLabel.fontSize,
    fontWeight: '600',
  },
  
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: TOKENS.components.authBtnMaxWidth,
    height: TOKENS.components.authBtnHeight,
    borderRadius: TOKENS.components.authBtnRadius,
    backgroundColor: '#FFFFFF', // White BG
  },
  appleBtnText: {
    color: TOKENS.colors.textInverse, // Black text
    fontFamily: TOKENS.typography.buttonLabel.fontFamily,
    fontSize: TOKENS.typography.buttonLabel.fontSize,
    fontWeight: '600',
  },
  btnIcon: {
    marginRight: 12,
    marginTop: -2, // Optical alignment
  },
});