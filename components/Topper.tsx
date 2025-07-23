import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Topper = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topper Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Topper;
