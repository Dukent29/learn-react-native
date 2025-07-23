import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Header from '../components/Topper';
import BottomNavBar from '../components/BottomNavBar';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Stack>{children}</Stack>
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
});

export default Layout;