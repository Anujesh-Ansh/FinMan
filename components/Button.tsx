import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ButtonProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  size: number;
  color: string;  
}


const Button:React.FC<ButtonProps> = ({name, size, color}) => {
  return (
    <TouchableWithoutFeedback>
        <View style={[styles.main, {borderColor: color}]}>
            <FontAwesome name={name} size={size} color={color} />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Button

const styles = StyleSheet.create({
    main:{
        
        borderWidth: 5,
        height:60,
        width: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})