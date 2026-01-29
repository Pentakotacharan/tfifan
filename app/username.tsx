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

export default function UsernameScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleContinue = () => {
    // 1. VALIDATION: Check if name is empty
    if (name.trim() === '') {
      Alert.alert("Required", "Please enter your name to continue.");
      return; 
    }

    // 2. NAVIGATE: Go to the 'Movie' screen created in the previous step
    // Ensure you have created the file 'app/movie.tsx'
    console.log("User Name:", name);
    router.push('/movie'); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#1A0B2E', '#000000']}
        locations={[0.0, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        <Text style={styles.questionText}>Nee Peremi??</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          autoFocus={true}
          selectionColor="#DCC8FF"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <LinearGradient
             colors={['#573199', '#341D5D']}
             style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Continue</Text>
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
    marginTop: -50,
  },
  questionText: {
    fontFamily: 'Antonio', 
    fontSize: 40, 
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 1,
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
  continueButton: {
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