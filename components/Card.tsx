import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component

const {width, height} = Dimensions.get('screen')

// Define the props type
interface CardProps {
  header: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ header, content }) => {
  return (
    <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.box}>
            <Text style={styles.header}>{header}</Text>
          </View>
          
          <View style={styles.divider}></View>
          
          <Text style={styles.content}>Live in {content}</Text>

        </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: height*0.15,
    width: width * 0.9,
    height: height*0.6,
    borderRadius: 40,
    backgroundColor: '#FFC700',
  },
  userContainer: {
    position:'absolute',
    width: width * 0.9,
    height: height*0.6,
    flex:1,
    padding:15,
  },
  box:{
    alignItems:'center',
  },
  header: {
    fontSize:50,
    
    color:'black',
    fontFamily: "Ticketing",
  },
  divider: {
    backgroundColor: 'black',
    height: 2,
    maxWidth: '100%',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    color:'white',
    fontWeight:'300',
  }
});
