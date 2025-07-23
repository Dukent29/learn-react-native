import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.navButton}>
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text style={styles.navText}>Portfolio</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text style={styles.navText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default BottomNavBar;