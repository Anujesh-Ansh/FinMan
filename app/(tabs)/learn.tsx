import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { users as userArray } from '../../utils/data';
import Card from '../../components/Card';
import Footer from '../../components/Footer';


export default function Learn() {
  
  const [users, setUsers] = useState(userArray);

  useEffect(() => {
    if (!users.length) {
      setUsers(userArray);
    }
  }, [users.length]);

  return (
    <View style={styles.container}>
      {users.map(({ id, name, image, location, distance, age}, index) => {
        const isFirst = index === 0;
        return (
          <Card
            key={id}
            name={name}
            location={location}
            age={age}
            distance={distance}
            image={image}
            isFirst={isFirst}
          />
        );
      }).reverse()
      }
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
