import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageBorder}>
          <Image
            source={require('../assets/images/lee.jpg')} // Adjust the path to your profile picture
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}>Anujesh Ansh</Text>
        <Text style={styles.points}>Points: 1500</Text>
        <Text style={styles.details}>Age: 21 | Location: Lucknow</Text>
        
      </View>
      <Link href="/Settings" asChild>
        <Pressable style={styles.settingsButton}>
            <MaterialIcons name="settings" size={30} color="black" />
            <Text style={styles.settingsText}>Settings</Text>
        </Pressable>
      </Link>
      
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
  imageBorder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    fontFamily:'Ticketing',
    fontSize: 34,
    marginBottom: 10,
  },
  points: {
    fontFamily:'Ticketing',
    fontSize: 18,
    color: 'grey',
    marginBottom: 10,
  },
  details: {
    fontFamily:'Ticketing',
    fontSize: 18,
    color: 'grey',
    marginBottom: 30,
  },
  settingsButton: {
    position:'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    fontFamily:'Ticketing',
    fontSize: 18,
    marginLeft: 10,
  },
});
