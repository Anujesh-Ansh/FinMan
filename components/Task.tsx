import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskProps {
    text: string;
    completed?: boolean;
    onToggleCompletion: (completed: boolean) => void;
}

const Task = (props: TaskProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <View style={styles.taskWrapper}>
            <View style={styles.leftOption}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.mainText}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.checkBtn} onPress={() => setIsChecked(prevIsChecked => !prevIsChecked)}>
                <MaterialIcons name={isChecked ? 'check' : 'radio-button-unchecked'} color={isChecked ? 'green' : '#ccc'} size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default Task;

const styles = StyleSheet.create({
    taskWrapper: {
        shadowColor: '#000',
        shadowOffset: { width: 0.03, height: 0.06 },
        shadowOpacity: 0.025,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#e8eafd',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftOption: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checkBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#b0d8fa',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        marginLeft: 15,
        fontSize: 22,
        fontFamily: 'Ticketing',
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
    },
});
