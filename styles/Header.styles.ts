import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1652f0', // Coinbase blue
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
