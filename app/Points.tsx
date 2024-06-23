import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('screen');

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        
          <Text style={styles.emoji}>💰</Text>
          <Text style={styles.scoreMessage}>Anujesh Ansh</Text>
          <View style={styles.score}>
            <Text style={styles.scoreText}>Your Points: </Text>
            <Text style={styles.points}>1500</Text>
          </View>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.8,
    padding: 20,
    borderRadius: 20,
    fontFamily: 'Ticketing',
},
emoji: {
    fontSize: 160,
    marginBottom: 10,
},
scoreMessage: {
    fontSize: 50,
    marginBottom: 10,
    fontFamily: 'Ticketing',
},
score:{

  flexDirection:'row',
},
scoreText: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'Ticketing',
    color: 'navy',
},
points: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Ticketing',
    color: 'red',
},
});
