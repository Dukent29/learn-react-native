import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { cryptos, Crypto } from '../data/cryptos';
import { cryptoListStyles } from '../styles/CryptoList.styles';

const CryptoItem = ({ crypto }: { crypto: Crypto }) => {
  const handleCryptoPress = () => {
    // TODO: Navigate to crypto details page
    console.log(`Pressed on ${crypto.name}`);
  };

  return (
    <Pressable 
      style={cryptoListStyles.cryptoItem}
      onPress={handleCryptoPress}
    >
      <View style={cryptoListStyles.leftSection}>
        <Image source={crypto.icon} style={cryptoListStyles.cryptoIcon} />
        <View style={cryptoListStyles.cryptoInfo}>
          <Text style={cryptoListStyles.cryptoName}>{crypto.name}</Text>
          <Text style={cryptoListStyles.cryptoSymbol}>{crypto.symbol}</Text>
        </View>
      </View>

      <View style={cryptoListStyles.rightSection}>
        <Text style={cryptoListStyles.cryptoPrice}>${crypto.price.toLocaleString()}</Text>
        <Text style={[
          cryptoListStyles.cryptoChange,
          crypto.change24h > 0 ? cryptoListStyles.positive : cryptoListStyles.negative
        ]}>
          {crypto.change24h > 0 ? '+' : ''}{crypto.change24h}%
        </Text>
      </View>
    </Pressable>
  );
};

const CryptoList = () => {
  return (
    <View style={cryptoListStyles.container}>
      <Text style={cryptoListStyles.sectionTitle}>Cryptomonnaies</Text>
      
      <FlatList
        data={cryptos}
        renderItem={({ item }) => <CryptoItem crypto={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CryptoList;