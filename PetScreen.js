import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const PetScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/dog1.png')} style={styles.imageTopLeft} />
        <Image source={require('../assets/dog2.png')} style={styles.imageTopRight} />
        <Image source={require('../assets/dog3.png')} style={styles.imageBottomLeft} />
        <Image source={require('../assets/dog4.png')} style={styles.imageBottomRight} />
      </View>
      <View style={styles.textOverlay}>
        <Text style={styles.title}>Köpek Duygu Analizine Hoş Geldiniz</Text>
        <Text style={styles.subtitle}>Köpeğinizin fotoğrafını çekin veya yükleyin anında duygu durumunu öğrenin.Daha fazlası için hemen başlayın.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Başla" onPress={() => navigation.navigate('Auth')} color="#8B4513" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.5,
    height: height * 0.5,
  },
  imageTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.5,
    height: height * 0.5,
  },
  imageBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * 0.5,
    height: height * 0.5,
  },
  imageBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.5,
    height: height * 0.5,
  },
  textOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    width: width * 0.4,
  },
});

export default PetScreen;
