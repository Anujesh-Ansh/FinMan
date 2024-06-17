import { StyleSheet, View,Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { users as userArray } from '../../utils/data';
import Card from '../../components/Card';
import Swiper from 'react-native-deck-swiper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Learn() {
  const [users, setUsers] = useState(userArray);

  useEffect(() => {
    if (!users.length) {
      setUsers(userArray);
    }
  }, [users.length]);

  const onSwiped = (index: number) => {
    if (index === users.length - 1) {
      setUsers(userArray); // Reset the users array when the last card is swiped
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe </Text>
      <MaterialIcons name="swap-horiz" color='black' size={90} style={styles.icon} />
      <Swiper
        cards={users}
        renderCard={(card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              location={card.location}
              age={card.age}
              distance={card.distance}
              image={card.image}
              isFirst={true} // The isFirst prop is not necessary for each card render here
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
    position:'absolute',
    top:40,
    fontSize: 85,
    fontFamily: 'Ticketing',
    marginBottom:20,
  },
  icon:{
    position:'absolute',
    top:100,
  }
});
