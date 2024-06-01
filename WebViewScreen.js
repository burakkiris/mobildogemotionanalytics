import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.hillspet.com.tr/dog-care/healthcare' }} // Belirttiğiniz URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
