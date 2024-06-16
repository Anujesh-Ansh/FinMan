import { StyleSheet, Text, View } from "react-native";

export default function LeaderBoard() {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Leader</Text>
        <Text style={styles.title}>Board</Text>
        <Text style={styles.subtitle}>Here all the users detail would be displayed according to the virtual coinss they have earned.</Text>
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
