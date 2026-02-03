import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import DraggableFlatList, { ScaleDecorator, RenderItemParams } from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons'; // Added for the Hamburger menu icon

// Initial Data
const INITIAL_DATA = [
  { id: '1', title: 'SALAAR' },
  { id: '2', title: 'MIRCHI' },
  { id: '3', title: 'CHAKRAM' },
  { id: '4', title: 'BAHUBALI' },
  { id: '5', title: 'BUJJIGADU' },
];

export default function RankScreen() {
  const router = useRouter();
  const [data, setData] = useState(INITIAL_DATA);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  // 1. Load Sound
  useEffect(() => {
    async function loadSound() {
      try {
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/sounds/pop.mp3') 
        );
        setSound(sound);
      } catch (error) {
        // console.log("Sound file not found");
      }
    }
    loadSound();
    return () => { if (sound) sound.unloadAsync(); };
  }, []);

  const playDropSound = async () => {
    if (sound) {
      try { await sound.replayAsync(); } catch (e) {}
    }
  };

  const handleContinue = () => {
    
    router.push('/finish'); 
  };

  const renderItem = ({ item, drag, isActive, getIndex }: RenderItemParams<typeof INITIAL_DATA[0]>) => {
    // 2. Strict Indexing: Forces numbers 1-5 based on current position
    const index = getIndex();
    const rankNumber = index !== undefined ? index + 1 : 1;

    return (
      <ScaleDecorator activeScale={1.05}>
        <TouchableOpacity
          onLongPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            drag();
          }}
          disabled={isActive}
          style={[
            styles.card,
            isActive && styles.cardActive 
          ]}
          activeOpacity={1}
        >
          {/* Rank Number:
              - opacity: isActive ? 0 : 1 -> Hides number while moving so it doesn't look weird.
              - Reappears as the CORRECT number immediately after drop.
          */}
          <Text style={[styles.rankNumber, { opacity: isActive ? 0 : 1 }]}>
            #{rankNumber}
          </Text>
          
          <Text style={styles.movieTitle}>{item.title}</Text>
          
          {/* Hamburger Menu Icon (from your screenshot) */}
          <View style={styles.dragHandle}>
            <Ionicons name="menu" size={24} color="#554A68" />
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        
        <LinearGradient
          colors={['#1A0B2E', '#000000']}
          locations={[0.0, 1.0]}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.header}>
          <Text style={styles.title}>Rank Cinema</Text>
        </View>

        <DraggableFlatList
          data={data}
          // IMPORTANT: extraData forces the list to re-render numbers when order changes
          extraData={data} 
          onDragEnd={({ data }) => {
            setData(data);
            playDropSound(); // Sound plays ONLY here (on drop)
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          containerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          activationDistance={20}
        />

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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Antonio',
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C152A', 
    height: 72,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  cardActive: {
    borderColor: '#DCC8FF', 
    backgroundColor: '#2A1F3D',
    shadowColor: '#DCC8FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
    zIndex: 999,
  },
  rankNumber: {
    fontFamily: 'Antonio', 
    fontSize: 24,
    color: '#554A68', 
    marginRight: 20,
    width: 40, 
  },
  movieTitle: {
    fontFamily: 'Antonio',
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
    flex: 1, 
  },
  dragHandle: {
    padding: 5,
  },
  footer: {
    paddingBottom: 50,
    paddingTop: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
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