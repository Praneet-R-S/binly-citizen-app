import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Binly Citizen App</Text>
      <Text style={styles.subtitle}>AI Waste Segregation</Text>
      <Text style={styles.status}>Backend: http://127.0.0.1:8000 ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  status: {
    fontSize: 14,
    color: '#4caf50',
    backgroundColor: '#e8f5e8',
    padding: 10,
    borderRadius: 5,
  },
});
