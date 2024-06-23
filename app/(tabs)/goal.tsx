import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Task from '../../components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@goals';

interface GoalItem {
  text: string;
  completed: boolean;
}

export default function Goal() {
  const [goal, setGoal] = useState<string>('');
  const [goalItems, setGoalItems] = useState<GoalItem[]>([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const saveGoals = async (goals: GoalItem[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
    } catch (error) {
      console.error('Failed to save goals:', error);
    }
  };

  const loadGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedGoals) {
        setGoalItems(JSON.parse(storedGoals));
      }
    } catch (error) {
      console.error('Failed to load goals:', error);
    }
  };

  const handleAddTask = () => {
    if (goal.trim() !== '') {
      const newGoals = [...goalItems, { text: goal.trim(), completed: false }];
      setGoalItems(newGoals);
      saveGoals(newGoals);
      setGoal('');
    } else {
      alert('Please enter a goal.');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newGoals = [...goalItems];
    newGoals.splice(index, 1);
    setGoalItems(newGoals);
    saveGoals(newGoals);
  };

  const handleToggleCompletion = (index: number) => {
    const newGoals = [...goalItems];
    newGoals[index].completed = !newGoals[index].completed;
    setGoalItems(newGoals);
    saveGoals(newGoals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Goals</Text>
          <MaterialIcons name="star" color="black" size={50} />
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.addingFeature}>
        <TextInput
          style={styles.input}
          placeholder={'Mention your Goals'}
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <MaterialIcons name="add" color="black" size={20} />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <ScrollView style={styles.goals}>
        {goalItems.map((item, index) => (
          <Task
            key={index}
            text={item.text}
            completed={item.completed}
            onDelete={() => handleDeleteTask(index)}
            onToggleCompletion={() => handleToggleCompletion(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  goalWrapper: {
    margin: 0,
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    gap: 20,
    marginLeft:10,
    marginBottom:20,
  },
  title: {
    fontSize: 70,
    fontFamily: 'Ticketing',
    
  },
  addingFeature: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  input: {
    fontSize: 20,
    fontFamily: 'Ticketing',
    width: '85%',
    minHeight: 50,
    padding: 15,
    backgroundColor: '#EDF6F9',
    borderRadius: 10,
    elevation: 5,
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: 'gray',
  },
  addButton: {
    backgroundColor: '#55bcf6',
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  goals: {
    padding: 15,
    flexDirection: 'column',
    
    marginBottom:80,

    
  },
});
