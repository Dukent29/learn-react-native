import { StyleSheet } from 'react-native';

export const walletSummaryStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  // New container for side-by-side layout
  changeAndChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  changeContainer: {
    flex: 1, // Takes available space on the left
    marginRight: 15, // Space between change text and chart
  },
  changeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  positive: {
    color: '#16c784', // Green for positive
  },
  negative: {
    color: '#ea3943', // Red for negative
  },
  chartContainer: {
    width: 80,  // Fixed smaller width
    height: 60, // Reduced height
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholder: {
    width: 70,     // Smaller to fit the container
    height: 50,    // Smaller to fit the container
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // More even spacing for 5 buttons
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  
  // New icon button styles
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    paddingVertical: 10,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: 50,
    height: 50,
    lineHeight: 48, // Centers the icon vertically
    borderRadius: 25, // Makes it circular
    overflow: 'hidden',
  },
  buttonLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  
  // Button background colors
  addButton: {
    // Icon background will be blue
  },
  buyButton: {
    // Icon background will be green
  },
  sellButton: {
    // Icon background will be red
  },
  receiveButton: {
    // Icon background will be blue
  },
  moreButton: {
    // Icon background will be gray
  },

  // Old styles (kept for compatibility)
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  transferButton: {
    backgroundColor: '#1652f0',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  
});
