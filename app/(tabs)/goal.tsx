import { StyleSheet, Text, View } from "react-native";
export default function Goal() {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Goals</Text>
        <Text style={styles.subtitle}>Here all the Goals & Chores would be listed over here !!</Text>
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
    marginRight:60,
    fontSize: 20,
    color: "grey",
    fontFamily: 'Ticketing',
  },
});
