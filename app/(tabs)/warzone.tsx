import { View, Text, StyleSheet } from 'react-native';

export default function WarZone() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>War Zone Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontFamily: 'Antonio', fontSize: 24 }
});