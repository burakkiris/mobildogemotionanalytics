import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Fotoğrafı kare yapar
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profilim</Text>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.buttonText}>Fotoğraf Yükle</Text>
      </TouchableOpacity>
      {photo && (
        <Image source={{ uri: photo }} style={styles.image} />
      )}
      <TextInput
        style={styles.input}
        placeholder="Köpeğinizin Adı"
        value={dogName}
        onChangeText={setDogName}
      />
      <TextInput
        style={styles.input}
        placeholder="Köpeğinizin Cinsi"
        value={dogBreed}
        onChangeText={setDogBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Köpeğinizin Yaşı"
        value={dogAge}
        onChangeText={setDogAge}
        keyboardType="numeric"
      />
      <Button title="Kaydet" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Yuvarlak yapmak için
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default ProfileScreen;
