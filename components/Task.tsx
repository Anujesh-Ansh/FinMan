import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TaskProps {
        text: string; // The text to be displayed in the Task component
    }

const Task = (props:TaskProps) => {
    return (
        <View style={styles.taskWrapper}>
            <Text>{props.text}</Text>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        borderColor: 'green',
        borderWidth:3,
        padding: 20,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'#e8eafd',
    },
})