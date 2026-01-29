import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface OnboardingProgressProps {
  totalSteps: number;
  currentStep: number;
}

export const OnboardingProgress: React.FC<OnboardingProgressProps> = ({ totalSteps = 4, currentStep = 2 }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.bar,
            { 
              backgroundColor: index < currentStep ? Colors.dark.text : Colors.dark.secondary 
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    gap: 8,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});