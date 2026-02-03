import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Dimensions,
  Alert 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48 - 16) / 2; // (Screen Width - Padding - Gap) / 2 columns

// Mock Data - REPLACE 'image' WITH YOUR LOCAL ASSETS
const ACTORS = [
  { id: '1', name: 'SALAAR', image: require('../assets/images/sallar.png') }, 
  { id: '2', name: 'OG', image: require('../assets/images/og.png') },
  { id: '3', name: 'PEDDI', image: require('../assets/images/peddi.png') },
  { id: '4', name: 'DRAGON', image: require('../assets/images/dragon.png') },
  { id: '5', name: 'BABU', image: require('../assets/images/babu.png') },
  { id: '6', name: 'PUSHPA', image: require('../assets/images/pushpa.png') },
];

export default function ActorScreen() {
  const router = useRouter();
  const [selectedActor, setSelectedActor] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedActor) {
      Alert.alert("Select an Actor", "Please select your favorite actor to continue.");
      return;
    }
    
    // Final Navigation to Tabs
    console.log("Selected Actor ID:", selectedActor);
    router.push('/rank'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background */}
      <LinearGradient
        colors={['#1A0B2E', '#000000']}
        locations={[0.0, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Evari thaluka?</Text>
          <Text style={styles.subtitle}>
            In the beta version, only a few actors are listed.{'\n'}The list will be updated soon.
          </Text>
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {ACTORS.map((actor) => {
            const isSelected = selectedActor === actor.id;
            return (
              <TouchableOpacity
                key={actor.id}
                style={[
                  styles.card, 
                  isSelected && styles.cardSelected // Highlight selected card
                ]}
                onPress={() => setSelectedActor(actor.id)}
                activeOpacity={0.9}
              >
                {/* Text Overlay */}
                <Text style={styles.cardText}>{actor.name}</Text>
                
                {/* Image */}
                <Image 
                  source={actor.image} 
                  style={styles.actorImage} 
                  resizeMode="cover" // or 'contain' depending on your image aspect ratio
                />
                
                {/* Gradient Overlay for text readability if needed */}
                <LinearGradient
                   colors={['rgba(0,0,0,0.6)', 'transparent']}
                   style={styles.cardGradient}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Footer Button */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 150, // Space for footer
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Antonio', // Primary header font
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Metropolis SemiBold',
    fontSize: 12,
    color: '#AFAFAF',
    textAlign: 'center',
    lineHeight: 18,
  },
  // --- Grid Layout ---
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.8, // Aspect ratio approx 4:3
    backgroundColor: '#1E1E1E', // Fallback
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent', // Default border
    marginBottom: 16,
  },
  cardSelected: {
    borderColor: '#DCC8FF', // Highlight border color (Lavender)
    borderWidth: 2,
    shadowColor: '#DCC8FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  cardText: {
    position: 'absolute',
    top: 12,
    left: 12,
    fontFamily: 'Antonio',
    fontSize: 24,
    color: '#FFFFFF', // Faded white/purple
    zIndex: 10,
    opacity: 0.4, // Style choice from screenshot
    textTransform: 'uppercase',
  },
  actorImage: {
    width: '100%',
    height: '100%',
    // Adjust position to replicate "cutout" look if your images are transparent PNGs
    marginTop: 10, 
  },
  
  // --- Footer ---
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
    paddingTop: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    // Optional: Add a fade to black at the bottom behind the button
    backgroundColor: 'transparent', 
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