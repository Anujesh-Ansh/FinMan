import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component

const {width, height} = Dimensions.get('screen')

// Define the props type
interface CardProps {
  name: string;
  location: string;
  age: number;
  distance: number;
  image: string; // URL as a string
  isFirst: boolean;
}

const Card: React.FC<CardProps> = ({ name, location, age, distance, image, isFirst }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <LinearGradient colors={['transparent', 'rgba(0,0,0,.9)']}
      style={styles.gradient}>
        <View style={styles.userContainer}>
          <Text style={styles.name}>{name}, {age}</Text>
          <Text style={styles.location}>Live in {location}</Text>
          <Text style={styles.distance}>{distance} km away</Text>
        </View>
        
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // Add styles for the container
    position:'absolute',
    top: 25,
    // top: 65,
  },
  image: {
    // width: 400,
    // height: 600,
    // borderRadius: 20,
    width: width * 0.9,
    height: height*0.5,
    borderRadius: 20,
  },
  gradient: {
    // Add styles for the gradient
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  userContainer: {
    // Add styles for the userContainer
    position:'absolute',
    bottom: height*0.03,
    left: width*0.04,
  },
  name: {
    // Add styles for the name
    fontSize:30,
    color:'white',
    fontWeight:'400',
  },
  location: {
    // Add styles for the location
    fontSize: 18,
    color:'white',
    fontWeight:'300',
  },
  distance: {
    // Add styles for the distance
    fontSize: 18,
    color:'white',
    fontWeight:'300',
  },
});
