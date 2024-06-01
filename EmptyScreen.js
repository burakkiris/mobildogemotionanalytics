import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { uploadPhoto } from './apiService';

const EmptyScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigation = useNavigation();

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Kamera erişimi reddedildi!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Çekilen fotoğraf:', result.assets[0].uri);
      setSelectedPhoto(result.assets[0].uri);
      handleUploadPhoto(result.assets[0].uri);
    }
  };

  const handleChooseFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Galeri erişimi reddedildi!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Seçilen fotoğraf:', result.assets[0].uri);
      setSelectedPhoto(result.assets[0].uri);
      handleUploadPhoto(result.assets[0].uri);
    }
  };

  const handleUploadPhoto = async (uri) => {
    if (!selectedPhoto) {
      alert('Lütfen önce bir fotoğraf seçin!');
      return;
    }

    console.log('Fotoğraf yükleniyor...'); // Fotoğrafın yüklendiğine dair bir mesajı konsola yazdır

    try {
      const photoData = new FormData();
      photoData.append('file', {
        uri: uri,
        type: 'image/jpeg', // veya 'image/png' gibi uygun bir medya türü
        name: 'selected-photo.jpg', // veya uygun bir dosya adı
      });

      const response = await uploadPhoto(photoData);
      console.log('Server Response:', response);
      navigation.navigate('ResponseScreen', { response: JSON.stringify(response) });
    } catch (error) {
      console.error('Hata oluştu:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Köpeğinizin Duygu Durumunu Öğrenin</Text>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.section, styles.section1]} onPress={handleTakePhoto}>
          <Text style={styles.sectionText}>Fotoğraf Çekin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.section, styles.section2]} onPress={handleChooseFromGallery}>
          <Text style={styles.sectionText}>Galeriden Seç</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
  },
  section1: {
    backgroundColor: '#3498db', // Mavi
  },
  section2: {
    backgroundColor: '#2ecc71', // Yeşil
  },
  sectionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default EmptyScreen;
