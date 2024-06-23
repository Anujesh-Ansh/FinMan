import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Chores() {
    
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Chores</Text>
        <Text style={styles.subtitle}>Here all the chores and the assignments would be displayed.</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    
  },
  title: {
    fontSize: 95,
    
    fontFamily: 'Ticketing',
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
    marginRight:60,
    fontFamily: 'Ticketing',
  },
});
