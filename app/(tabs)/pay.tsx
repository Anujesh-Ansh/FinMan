import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
export default function Pay() {
  const [fontsLoaded, fontError] = useFonts({
    'Ticketing': require('../../assets/fonts/Ticketing.ttf'),// Adjust the path as necessary
});
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Scan & Pay</Text>
        <Text style={styles.subtitle}>Here u can easily scan the QR codes present at the NGOs to redeem ur points.</Text>
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
    
    fontFamily: "Ticketing",
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
    marginRight:60, 
    fontFamily: "Ticketing",
  },
});
