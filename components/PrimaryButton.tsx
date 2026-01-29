import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'text';
  style?: ViewStyle;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary',
  style 
}) => {
  if (variant === 'text') {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.textBtnContainer, style]}>
        <Text style={styles.textBtnLabel}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.dark.border,
    // Add shadow/glow effect
    shadowColor: Colors.dark.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System', // Use system font or custom if loaded
  },
  textBtnContainer: {
    padding: 12,
    alignItems: 'center',
  },
  textBtnLabel: {
    color: Colors.dark.text,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});