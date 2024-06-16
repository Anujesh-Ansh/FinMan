import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { users as userArray } from '../../utils/data';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Swiper from 'react-native-deck-swiper';

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
        containerStyle={styles.swiper}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  swiper:{
      backgroundColor: 'white',
  }
});
