import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { newsData } from './data';

const NewsDetail = () => {
  const { id } = useLocalSearchParams();

  const newsItem = newsData.find((news) => news.id === id);

  if (!newsItem) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>News not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.content}>{newsItem.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default NewsDetail;