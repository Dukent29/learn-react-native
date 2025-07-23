import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { walletSummaryStyles } from '../styles/WalletSummary.styles';

const WalletSummary = () => {
  const totalBalance = 12547.89;
  const dailyChange = 345.67;
  const changePercent = 2.84;

  // Button handlers
  const handleAddPress = () => console.log('Add pressed');
  const handleSellPress = () => console.log('Sell pressed');
  const handleBuyPress = () => console.log('Buy pressed');
  const handleReceivePress = () => console.log('Receive pressed');
  const handleMorePress = () => console.log('More pressed');

  return (
    <View style={walletSummaryStyles.container}>
      <Text style={walletSummaryStyles.balanceLabel}>Portfolio total</Text>
      <Text style={walletSummaryStyles.balanceAmount}>${totalBalance.toLocaleString()}</Text>
      
      {/* Change and Chart side by side */}
      <View style={walletSummaryStyles.changeAndChartContainer}>
        <View style={walletSummaryStyles.changeContainer}>
          <Text style={[
            walletSummaryStyles.changeText, 
            changePercent > 0 ? walletSummaryStyles.positive : walletSummaryStyles.negative
          ]}>
            {changePercent > 0 ? '+' : ''}${dailyChange.toFixed(2)} ({changePercent > 0 ? '+' : ''}{changePercent}%)
          </Text>
        </View>

        {/* Smaller chart placeholder */}
        <View style={walletSummaryStyles.chartContainer}>
          <Image source={require('../assets/chart-placeholder.png')} style={walletSummaryStyles.chartPlaceholder} />
        </View>
      </View>

      {/* Action buttons */}
      <View style={walletSummaryStyles.buttonContainer}>
        <Pressable style={walletSummaryStyles.iconButton} onPress={handleAddPress}>
          <Text style={[walletSummaryStyles.iconText, {backgroundColor: '#1652f0'}]}>+</Text>
          <Text style={walletSummaryStyles.buttonLabel}>Add</Text>
        </Pressable>
        
        <Pressable style={walletSummaryStyles.iconButton} onPress={handleSellPress}>
          <Text style={[walletSummaryStyles.iconText, {backgroundColor: '#ea3943'}]}>-</Text>
          <Text style={walletSummaryStyles.buttonLabel}>Sell</Text>
        </Pressable>
        
        <Pressable style={walletSummaryStyles.iconButton} onPress={handleBuyPress}>
          <Text style={[walletSummaryStyles.iconText, {backgroundColor: '#16c784'}]}>↑</Text>
          <Text style={walletSummaryStyles.buttonLabel}>Buy</Text>
        </Pressable>
        
        <Pressable style={walletSummaryStyles.iconButton} onPress={handleReceivePress}>
          <Text style={[walletSummaryStyles.iconText, {backgroundColor: '#1652f0'}]}>↓</Text>
          <Text style={walletSummaryStyles.buttonLabel}>Receive</Text>
        </Pressable>
        
        <Pressable style={walletSummaryStyles.iconButton} onPress={handleMorePress}>
          <Text style={[walletSummaryStyles.iconText, {backgroundColor: '#666'}]}>⋯</Text>
          <Text style={walletSummaryStyles.buttonLabel}>More</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WalletSummary;