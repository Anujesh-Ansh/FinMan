import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { users, User } from '../utils/userData';

export default function LeaderBoard() {
  const [filter, setFilter] = useState<string>('Points');

  const filterUsers = (users: User[]) => {
    switch (filter) {
      case 'Points':
        return users.sort((a, b) => b.points - a.points);
      case 'Friends':
        return users.filter(user => user.relationship === 'friend');
      case 'Organisation':
        return users.filter(user => user.organisation === 'same');
      default:
        return users;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleFirst}>Leader</Text>
          <Text style={styles.titleLast}>Board</Text>
        </View>
        <Text style={styles.subtitle}>
          Here all the users' details would be displayed according to the virtual coins they have earned.
        </Text>
      </View>
      <View style={styles.filter}>
        <Pressable style={filter === 'Points' ? styles.filterBtnActive : styles.filterBtn} onPress={() => setFilter('Points')}>
          <Text style={filter === 'Points' ? styles.filterBtnTextActive : styles.filterBtnText}>Points</Text>
        </Pressable>

        <Pressable style={filter === 'Friends' ? styles.filterBtnActive : styles.filterBtn} onPress={() => setFilter('Friends')}>
          <Text style={filter === 'Friends' ? styles.filterBtnTextActive : styles.filterBtnText}>Friends</Text>
        </Pressable>

        <Pressable style={filter === 'Organisation' ? styles.filterBtnActive : styles.filterBtn} onPress={() => setFilter('Organisation')}>
          <Text style={filter === 'Organisation' ? styles.filterBtnTextActive : styles.filterBtnText}>Organisation</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filterUsers(users).map((user, index) => (
          <View key={user.id} style={styles.userContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>
                {user.name}{' '}
                {user.relationship === 'friend' && (
                  <MaterialIcons name="star" size={20} color="gold" />
                )}
                {user.relationship === 'myself' && (
                  <MaterialIcons name="swipe-left-alt" size={20} color="navy" />
                )}
              </Text>
              <View style={styles.points}>
                <Text style={styles.userPoints}>{user.points}</Text>
                <Text style={styles.pointsText}> points</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
  },
  titleFirst: {
    fontSize: 50,
    fontFamily: 'Ticketing',
  },
  titleLast: {
    fontSize: 50,
    fontFamily: 'Ticketing',
    color: 'gold',
  },
  subtitle: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterBtn: {
    fontSize: 20,
    fontFamily: 'Ticketing',
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    backgroundColor: '#FFC700',
    padding: 5,
    borderRadius: 10,
  },
  filterBtnActive: {
    fontSize: 20,
    fontFamily: 'Ticketing',
    borderColor: '#FFC700',
    borderWidth: 2,
    color: '#FFC700',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 10,
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
  scrollContainer: {
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  rank: {
    fontFamily: 'Ticketing',
    fontSize: 20,
    width: 30,
  },
  userDetails: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  userName: {
    fontFamily: 'Ticketing',
    fontSize: 30,
  },
  points: {
    flexDirection: 'row',
  },
  userPoints: {
    fontFamily: 'Ticketing',
    fontSize: 16,
    color: 'brown',
  },
  pointsText: {
    fontFamily: 'Ticketing',
    fontSize: 16,
    color: 'grey',
  },
});
