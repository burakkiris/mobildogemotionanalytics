import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import EmptyScreen from './screens/EmptyScreen';
import Auth from './screens/Auth';
import PetScreen from './screens/PetScreen';
import ResponseScreen from './screens/ResponseScreen';
import WebViewScreen from './screens/WebViewScreen';
import ProfileScreen from './screens/ProfileScreen'; // ProfileScreen'i içe aktardık

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PetScreen">
        <Stack.Screen name="PetScreen" component={PetScreen} options={{ title: 'Köpek Duygu Analizi' }} />
        <Stack.Screen name="Auth" component={Auth} options={{ title: 'Giriş Sayfası' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} options={{ title: 'Yükleme Sayfası' }} />
        <Stack.Screen name="ResponseScreen" component={ResponseScreen} options={{ title: 'Cevap Ekranı' }} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ title: 'Sağlık Bilgileri' }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profilim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
