import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  iconName: keyof typeof AntDesign.glyphMap;
  variant?: 'outline' | 'filled'; // outline for Google, filled for Apple
  style?: ViewStyle;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ 
  title, 
  onPress, 
  iconName, 
  variant = 'outline',
  style 
}) => {
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.container, 
        isOutline ? styles.outlineContainer : styles.filledContainer,
        style
      ]}
    >
      <AntDesign 
        name={iconName} 
        size={24} 
        color={isOutline ? 'white' : 'black'} 
        style={styles.icon}
      />
      <Text style={[styles.label, isOutline ? styles.outlineText : styles.filledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    marginBottom: 16,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
  filledContainer: {
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: 'white',
  },
  filledText: {
    color: 'black',
  },
});