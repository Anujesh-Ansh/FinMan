import React, { useState, useEffect, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, RefreshControl } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { saveChores, loadChores, ChoreItem } from '../../utils/choresData';

export default function Chores() {
  const [chore, setChore] = useState<string>('');
  const [points, setPoints] = useState<string>('');
  const [choreItems, setChoreItems] = useState<ChoreItem[]>([]);
  const [filter, setFilter] = useState<string>('Pending');
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const { chore: scannedChore, points: scannedPoints } = useLocalSearchParams();

  useEffect(() => {
    loadChoresData();
  }, []);

  useEffect(() => {
    if (scannedChore && scannedPoints) {
      handleAddChoreFromScan(scannedChore as string, parseInt(scannedPoints as string, 10));
    }
  }, [scannedChore, scannedPoints]);

  const loadChoresData = async () => {
    const chores = await loadChores();
    setChoreItems(chores);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadChoresData().then(() => setRefreshing(false));
  }, []);

  const handleAddChore = () => {
    const pointsValue = parseInt(points, 10);
    if (chore.trim() !== '' && !isNaN(pointsValue)) {
      const newChores = [...choreItems, { text: chore.trim(), points: pointsValue, completed: false }];
      setChoreItems(newChores);
      saveChores(newChores);
      setChore('');
      setPoints('');
    } else {
      alert('Please enter both a chore and a valid points value.');
    }
  };

  const handleAddChoreFromScan = (scannedChore: string, scannedPoints: number) => {
    const newChores = [...choreItems, { text: scannedChore, points: scannedPoints, completed: false }];
    setChoreItems(newChores);
    saveChores(newChores);
  };

  const handleDeleteChore = (index: number) => {
    const newChores = [...choreItems];
    newChores.splice(index, 1);
    setChoreItems(newChores);
    saveChores(newChores);
  };

  const handleToggleCompletion = (index: number) => {
    const newChores = [...choreItems];
    newChores[index].completed = !newChores[index].completed;
    setChoreItems(newChores);
    saveChores(newChores);
  };

  const filterChores = (chores: ChoreItem[]) => {
    switch (filter) {
      case 'Pending':
        return chores.filter(chore => !chore.completed);
      case 'Completed':
        return chores.filter(chore => chore.completed);
      default:
        return chores;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chores</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.addingFeature}>
        <TextInput
          style={styles.inputPoint}
          placeholder={'Points'}
          value={points}
          onChangeText={(text) => setPoints(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder={'Enter your chore'}
          value={chore}
          onChangeText={(text) => setChore(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddChore}>
          <MaterialIcons name="add" color="black" size={20} />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.filter}>
        <Pressable style={filter === 'Pending' ? styles.filterBtnActive : styles.filterBtn} onPress={() => setFilter('Pending')}>
          <Text style={filter === 'Pending' ? styles.filterBtnTextActive : styles.filterBtnText}>Pending</Text>
        </Pressable>

        <Pressable style={filter === 'Completed' ? styles.filterBtnActive : styles.filterBtn} onPress={() => setFilter('Completed')}>
          <Text style={filter === 'Completed' ? styles.filterBtnTextActive : styles.filterBtnText}>Completed</Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.chores}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {filterChores(choreItems).map((item, index) => (
          <View key={index} style={styles.choreContainer}>
            <Text style={[styles.choreText, item.completed ? styles.completedText : null]}>{item.text}</Text>
            <Text style={styles.chorePoints}>{item.points} points</Text>
            <TouchableOpacity onPress={() => handleToggleCompletion(index)}>
              <MaterialIcons name={item.completed ? "check-circle" : "radio-button-unchecked"} size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteChore(index)}>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Ticketing',
    color: 'black',
  },
  addingFeature: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginBottom: 20,
  },
  inputPoint: {
    fontSize: 18,
    fontFamily: 'Ticketing',
    width: '20%',
    minHeight: 50,
    padding: 10,
    backgroundColor: '#EDF6F9',
    borderRadius: 10,
    elevation: 5,
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: 'gray',
    alignContent: 'center',
  },
  input: {
    fontSize: 20,
    fontFamily: 'Ticketing',
    width: '60%',
    minHeight: 50,
    padding: 10,
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
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterBtn: {
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    width: 120,
    backgroundColor: '#FFC700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBtnActive: {
    borderColor: '#FFC700',
    borderWidth: 2,
    width: 120,
    color: '#FFC700',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBtnText: {
    fontSize: 20,
    fontFamily: 'Ticketing',
  },
  filterBtnTextActive: {
    fontSize: 20,
    fontFamily: 'Ticketing',
    color: '#FFC700',
  },
  chores: {
    padding: 15,
    flexDirection: 'column',
    marginBottom: 80,
    borderRadius: 30,
    backgroundColor: '#d3d3d3',
  },
  choreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    marginBottom: 15,
    borderBottomColor: 'black',
  },
  choreText: {
    fontSize: 22,
    fontFamily: 'Ticketing',
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  chorePoints: {
    fontSize: 22,
    fontFamily: 'Ticketing',
    color: 'brown',
    marginRight: 10,
  },
});
