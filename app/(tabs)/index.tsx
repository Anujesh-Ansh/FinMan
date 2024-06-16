import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
    
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Dash</Text>
        <Text style={styles.title}>Board</Text>
        <Text style={styles.subtitle}>Here the expenses & all the transactions would be displayed.</Text>
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
