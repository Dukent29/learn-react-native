import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Header from './components/Header';
import WalletSummary from './components/WalletSummary';
import CryptoList from './components/CryptoList';
import { appStyles } from './styles/App.styles';

export default function App() {
  return (
    <SafeAreaView style={appStyles.container}>
      {/* StatusBar for Android */}
      <StatusBar
        backgroundColor="#1652f0"
        barStyle="light-content"
        translucent={Platform.OS === 'android'}
      />
      
      <Header />
      <WalletSummary />
      <CryptoList />
    </SafeAreaView>
  );
}
