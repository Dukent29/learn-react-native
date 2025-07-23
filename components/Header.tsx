import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { headerStyles } from '../styles/Header.styles';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Pressable style={headerStyles.iconButton}>
        <Text style={headerStyles.icon}>☰</Text>
      </Pressable>
      
      <Text style={headerStyles.title}>Portfolio</Text>
      
      <Pressable style={headerStyles.iconButton}>
        <Text style={headerStyles.icon}>🔔</Text>
      </Pressable>
    </View>
  );
};

export default Header;