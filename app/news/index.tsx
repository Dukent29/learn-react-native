import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { newsData } from './data';

const NewsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Listing</Text>
      {newsData.map((news) => (
        <Link key={news.id} href={`/news/${news.id}`} style={styles.link}>
          <Text>{news.title}</Text>
        </Link>
      ))}
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
  link: {
    marginVertical: 10,
    color: 'blue',
  },
});

export default NewsList;
