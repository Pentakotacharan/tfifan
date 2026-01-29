import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function MovieScreen() {
  const router = useRouter();
  const [movie, setMovie] = useState('');

  const handleNext = () => {
    // Navigate to final destination (e.g., Home Tabs)
    if (movie.trim() === '') {
      Alert.alert("Required", "Please enter your favorite movie to continue.");
      return; 
    }
    console.log("Favorite Movie:", movie);
    router.push('/song'); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      
      {/* Background Gradient - Consistent Deep Purple */}
      <LinearGradient
        colors={['#1A0B2E', '#000000']}
        locations={[0.0, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        {/* Heading: "Nacchina Telugu Cinema?" */}
        <Text style={styles.questionText}>Nacchina Telugu Cinema?</Text>

        {/* Input Field */}
        <TextInput
          style={styles.input}
          value={movie}
          onChangeText={setMovie}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          autoFocus={true}
          selectionColor="#DCC8FF"
        />
      </View>

      {/* Footer Button: "Next" */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext} activeOpacity={0.8}>
          <LinearGradient
             colors={['#573199', '#341D5D']}
             style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 40,
    marginTop: -50, // Optical vertical centering
  },
  questionText: {
    fontFamily: 'Antonio', // Using the primary header font
    fontSize: 32, // Adjusted size to fit longer text
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Metropolis SemiBold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 24,
  },
  nextButton: {
    width: '100%',
    maxWidth: 335,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#7A54A6',
  },
  gradientBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Zin Display Condensed Demo', 
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});