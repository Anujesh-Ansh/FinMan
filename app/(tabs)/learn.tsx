import { StyleSheet, View, Text, Modal, Dimensions, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { users as userArray } from '../../utils/data';
import { quizQuestions } from '../../utils/quizData';
import Card from '../../components/Card';
import Swiper from 'react-native-deck-swiper';
import Quiz from '../../components/Quiz';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function Learn() {
  const [users, setUsers] = useState(userArray);
  const [isQuizVisible, setQuizVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!users.length) {
      setQuizVisible(true); // Show quiz when all cards are swiped
    }
  }, [users.length]);

  const onSwiped = (index: number) => {
    if (index === users.length - 1) {
      setUsers([]); // Clear users array when the last card is swiped
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setUsers(userArray); // Reset users to the initial state
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe</Text>
      <MaterialIcons name="swap-horiz" color="black" size={90} style={styles.icon} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.swiperContainer}>
          {users.length > 0 ? (
            <Swiper
              cards={users}
              renderCard={(card) => {
                return (
                  <Card
                    key={card.id}
                    header={card.header}
                    content={card.content}
                    color={card.color}
                  />
                );
              }}
              onSwiped={onSwiped}
              cardIndex={0}
              stackSize={5}
              stackScale={10}
              stackSeparation={15}
              backgroundColor={'transparent'}
            />
          ) : (
            <Text>No more cards</Text>
          )}
        </View>
      </ScrollView>
      <Modal visible={isQuizVisible} animationType="slide">
        <Quiz questions={quizQuestions} onClose={() => setQuizVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    position: 'absolute',
    top: 40,
    fontSize: 85,
    fontFamily: 'Ticketing',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    top: 100,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.8,
  },
});
