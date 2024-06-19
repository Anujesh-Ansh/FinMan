import { StyleSheet, View, Text, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { users as userArray } from '../../utils/data';
import { quizQuestions } from '../../utils/quizData';
import Card from '../../components/Card';
import Swiper from 'react-native-deck-swiper';
import Quiz from '../../components/Quiz';
import { MaterialIcons } from '@expo/vector-icons';

export default function Learn() {
  const [users, setUsers] = useState(userArray);
  const [isQuizVisible, setQuizVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Track initial load

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false); // Set initial load to false after first render
    } else {
      setUsers(userArray); // Reset users array after quiz modal is closed
    }
  }, [isQuizVisible]);

  const onSwiped = (index: number) => {
    if (index === users.length - 1) {
      setUsers([]); // Clear users array when the last card is swiped
    }
  };

  const handleQuizClose = () => {
    setQuizVisible(false); // Hide quiz modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe</Text>
      <MaterialIcons name="swap-horiz" color="black" size={90} style={styles.icon} />
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
        stackSize={3}
        stackScale={10}
        stackSeparation={15}
        backgroundColor={'transparent'}
      />
      <Modal visible={isQuizVisible} animationType="slide">
        <Quiz questions={quizQuestions} onClose={handleQuizClose} />
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
});
