import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TaskManager from './TaskManager';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Manager with Expo</Text>
      <TaskManager/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: "#333",
    
  }
});
