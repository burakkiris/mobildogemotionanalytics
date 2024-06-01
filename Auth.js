import { StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { useState, useEffect } from 'react';
import AuthScreen from './AuthScreen';
import AuthenticatedScreen from './AuthenticatedScreen';
import app from '../config/FirebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  }
  
  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/background1.png')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {user ? (
          // Show user's email if user is authenticated
          <AuthenticatedScreen 
            user={user} 
            handleAuthentication={handleAuthentication} 
            handleHome={handleHome}
          />
        ) : (
          // Show sign-in or sign-up form if user is not authenticated
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: 'rgba(0,0,0,0)', // Transparent background
  },
});

export default Auth;
