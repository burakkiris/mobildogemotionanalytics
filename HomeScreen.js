import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const openEmptyScreen = () => {
    navigation.navigate('EmptyScreen');
  };

  const handleHealthInfo = () => {
    navigation.navigate('WebViewScreen');
  };

  const handleNearbyVets = () => {
    const url = 'https://www.google.com/maps/search/veteriner/';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.section} onPress={openEmptyScreen} activeOpacity={0.7}>
        <Image source={require('../assets/gorsel1.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.sectionText}>Duygu Durumu Öğrenme</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={handleHealthInfo} activeOpacity={0.7}>
        <Image source={require('../assets/gorsel2.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.sectionText}>Köpek Eğitimi Ve Sağlığı</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={handleNearbyVets} activeOpacity={0.7}>
        <Image source={require('../assets/gorsel3.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.sectionText}>En Yakın Veterineri Bul</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000', // Siyah çizgi
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Hafif opak beyaz
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000', // Siyah çizgi
    zIndex: 1, // Metnin görselin üstünde olmasını sağlar
  },
  sectionText: {
    fontSize: 18,
    color: '#000', // Siyah renk
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
