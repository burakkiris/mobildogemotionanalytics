import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResponseScreen = ({ route }) => {
  const { response } = route.params;

  let backgroundColor = '#3498db'; // Default color: Blue
  let emotion = '';
  let percentage = '';

  if (response.includes('happy')) {
    backgroundColor = '#2ecc71'; // Green
    emotion = 'MUTLU';
  } else if (response.includes('relaxed')) {
    backgroundColor = '#f1c40f'; // Yellow
    emotion = 'RAHAT';
  } else if (response.includes('angry')) {
    backgroundColor = '#e74c3c'; // Red
    emotion = 'KIZGIN';
  } else if (response.includes('sad')) {
    backgroundColor = '#95a5a6'; // Gray
    emotion = 'ÜZGÜN';
  }

  // Noktadan sonra gelen sayının ilk rakamını bulma ve 10 ile çarpma
  const regex = /\.\s*([\d.]+)/;
  const match = response.match(regex);
  if (match) {
    const firstDigit = match[1][0]; // İlk rakamı al
    const percentageValue = parseInt(firstDigit) * 10; // 10 ile çarp
    percentage = `${percentageValue}%`; // Yüzde işareti ekle
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.responseText}>Köpeğiniz</Text>
      <Text style={styles.percentageText}>{percentage} ihtimal ile</Text>
      <Text style={styles.emotionText}>{emotion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  responseText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  emotionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default ResponseScreen;
