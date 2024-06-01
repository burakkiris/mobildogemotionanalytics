import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <ImageBackground 
      source={require('../assets/background1.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.authContainer}>
        <Text style={styles.title}>Hoş Geldiniz</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleAuthentication} style={styles.button}>
            <Text style={styles.buttonText}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.toggleText}>
              {isLogin ? 'Hesabın Yok mu? Kayıt Ol' : 'Zaten Hesabın Var mı? Giriş Yap'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '105%',
    height: '104%',
    left:-9,
    top:-13
  },
  authContainer: {
    width: '90%',
    maxWidth: 500,
    padding: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    left:10,
    top:12
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 12,
    borderRadius: 6,
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D2B48C', // Sarıya yakın kahverengi
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  toggleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold', // Kalın font
    borderBottomWidth: 1, // Alt çizgi
    borderBottomColor: '#3498db',
    paddingBottom: 2, // Alt çizgiyi yazıdan biraz uzaklaştırır
  },
  bottomContainer: {
    marginTop: 20,
  }
});

export default AuthScreen;
