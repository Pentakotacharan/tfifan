import React, { useState, useCallback } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

// 1. Define Image Mapping (Must match IDs in actor.tsx)
const ACTOR_IMAGES: { [key: string]: any } = {
  '1': require('../../assets/images/sallar.png'),
  '2': require('../../assets/images/og.png'),
  '3': require('../../assets/images/peddi.png'),
  '4': require('../../assets/images/dragon.png'),
  '5': require('../../assets/images/babu.png'),
  '6': require('../../assets/images/pushpa.png'),
  // Default fallback
  'default': require('../../assets/images/babu.png'), 
};

// Initial Data
const INITIAL_STORIES = [
  { id: 'me', name: 'YOU', image: ACTOR_IMAGES['default'], isUser: true },
  { id: '1', name: 'MAHESH', image: ACTOR_IMAGES['5'], online: true },
  { id: '2', name: 'KALYAN', image: ACTOR_IMAGES['2'], online: true },
  { id: '3', name: 'NTR', image: ACTOR_IMAGES['4'], online: true },
  { id: '4', name: 'PRABHAS', image: ACTOR_IMAGES['1'], online: false },
];

export default function HomeScreen() {
  const [stories, setStories] = useState(INITIAL_STORIES);

  // 2. Load Selected Actor when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      const loadUserImage = async () => {
        try {
          // Retrieve the ID saved in actor.tsx
          const savedActorId = await AsyncStorage.getItem('user_actor_id');
          
          if (savedActorId && ACTOR_IMAGES[savedActorId]) {
            // Update the "YOU" story with the new image
            setStories(prevStories => {
              const newStories = [...prevStories];
              newStories[0] = { 
                ...newStories[0], 
                image: ACTOR_IMAGES[savedActorId] 
              };
              return newStories;
            });
          }
        } catch (error) {
          console.log("Error loading profile image:", error);
        }
      };

      loadUserImage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A0B2E', '#000000']}
        locations={[0.0, 0.4]}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- HEADER --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logoText}>TFI{'\n'}FAN</Text>
          </View>
          
          <TouchableOpacity>
            {/* Displaying User Profile Pic (Also synced if desired) */}
            <Image 
              source={stories[0].image} // Using the selected actor here too
              style={styles.profilePic} 
            />
          </TouchableOpacity>
        </View>

        {/* --- STORIES ROW --- */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.storiesContainer}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {/* Daily Tolly Story */}
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.dailyTollyCircle}>
              <Text style={styles.dtTitle}>DAILY{'\n'}TOLLY</Text>
              <View style={styles.dtBadge}>
                <Text style={styles.dtBadgeText}>STARTS IN</Text>
              </View>
            </View>
            <Text style={styles.storyName}>00:00 HRS</Text>
          </TouchableOpacity>

          {/* User & Friends Stories */}
          {stories.map((story, index) => (
            <TouchableOpacity key={index} style={styles.storyItem}>
              <View style={[styles.avatarContainer, story.isUser && { borderColor: '#AFAFAF' }]}>
                <Image 
                  source={story.image} 
                  style={styles.avatar} 
                />
                {story.online && <View style={styles.onlineDot} />}
              </View>
              <Text style={styles.storyName}>{story.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* --- MAIN CARD AREA --- */}
        <View style={styles.mainCard}>
          <LinearGradient
            colors={['#25163A', '#160E21']}
            style={styles.cardGradient}
          >
             <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
                <LinearGradient
                   colors={['#573199', '#341D5D']}
                   style={styles.playBtnGradient}
                >
                  <Text style={styles.playBtnText}>Play Daily Tolly</Text>
                </LinearGradient>
             </TouchableOpacity>
          </LinearGradient>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollContent: { paddingTop: 60, paddingBottom: 100 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 24 },
  logoText: { fontFamily: 'Antonio', fontSize: 28, lineHeight: 24, color: '#FFFFFF', fontWeight: '700', textShadowColor: '#000', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 1 },
  profilePic: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#FFFFFF' },
  storiesContainer: { marginBottom: 30 },
  storyItem: { alignItems: 'center', marginRight: 16, width: 70 },
  storyName: { color: '#888', fontSize: 10, marginTop: 6, fontFamily: 'Metropolis SemiBold', textTransform: 'uppercase' },
  avatarContainer: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: '#4A4A4A', padding: 3, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  avatar: { width: '100%', height: '100%', borderRadius: 30 },
  onlineDot: { position: 'absolute', bottom: 0, right: 4, width: 14, height: 14, borderRadius: 7, backgroundColor: '#2ECC71', borderWidth: 2, borderColor: '#000' },
  dailyTollyCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#2A1F3D', borderWidth: 2, borderColor: '#7A54A6', justifyContent: 'center', alignItems: 'center' },
  dtTitle: { color: '#FFFFFF', fontSize: 10, fontWeight: '800', textAlign: 'center', lineHeight: 10, marginBottom: 4 },
  dtBadge: { backgroundColor: '#573199', paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4 },
  dtBadgeText: { color: '#FFF', fontSize: 6, fontWeight: '700' },
  mainCard: { marginHorizontal: 20, height: 450, borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: '#2A1F3D' },
  cardGradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  playButton: { width: 180, height: 50, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: '#9E86C6' },
  playBtnGradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  playBtnText: { color: '#FFFFFF', fontSize: 16, fontFamily: 'Zin Display Condensed Demo', letterSpacing: 0.5 },
});