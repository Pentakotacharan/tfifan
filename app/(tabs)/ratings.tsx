import { View, Text, StyleSheet } from 'react-native';

export default function Ratings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ratings Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontFamily: 'Antonio', fontSize: 24 }
});