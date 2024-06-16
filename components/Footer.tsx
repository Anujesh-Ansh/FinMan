import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

const {width, height} = Dimensions.get('screen')

const COLORS = {
    like: "#00eda6",
    nope: "#ff006f",
    star: "#07A6FF"
}

const Footer = () => {
  return (
    <View style={styles.container}>
      <Button 
        name="times"
        size={24}
        color={COLORS.nope}
        
      />
      <Button 
        name="star"
        size={24}
        color={COLORS.star}
        
      />
      <Button 
        name="heart"
        size={24}
        color={COLORS.like}
        
      />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        // borderColor: 'red',
        // borderWidth: 4,
        position:'absolute',
        bottom:height* 0.09,
        width:width*0.5,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -999,
        
    },
    button:{

    }
})