import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface TaskProps {
        text: string; // The text to be displayed in the Task component
    }

const Task = (props:TaskProps) => {
    return (
        <View style={styles.taskWrapper}>
            <View style={styles.leftOption}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.mainText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        // borderColor: 'green',
        // borderWidth:3,
        shadowColor: '#000',
        shadowOffset: { width: 0.03, height: 0.06 },
        shadowOpacity: 0.025,
        shadowRadius: 2,
        elevation:5,

        padding: 20,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'#e8eafd',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    leftOption: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    mainText: {
        fontSize: 16,
        fontFamily:'Ticketing',
        maxWidth:'80%',
        
    },
    circular:{
        // borderRadius:150,
        // borderColor:'black',
        // borderWidth:1,
        // padding:5,
        // backgroundColor:'white',

        width:12,
        height:12,
        borderColor: 'black',
        borderWidth:2,
        borderRadius:5,

    },

})