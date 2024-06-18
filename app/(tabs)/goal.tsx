import { StyleSheet, Text, View } from "react-native";
import Task from "../../components/Task";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';


export default function Goal() {
  
  return (
    <View style={styles.container}>
      {/* Heading -> Goals */}
      <View style={styles.goalWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}> GOALS</Text>
          <MaterialIcons name="star" color='black' size={70} />
        </View>
        

      </View>

      {/* Adding Feature*/}     
      <View>
        <Text>Heelo</Text>
      </View>
        {/* Adding Feature -> Typing Space*/}
        
        {/* Adding Feature -> Adding Button*/}


      {/* Goals */}
      <ScrollView style={styles.goals}>
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
        <Task text={'Task 3'}/>
        <Task text={'Task 4'}/>
        <Task text={'Task 5'}/>
        <Task text={'Task 6'}/>
        <Task text={'Task 7'}/>
        <Task text={'Task 8'}/>
        <Task text={'Task 9'}/>
        <Task text={'Task 10'}/>
        <Task text={'Task 11'}/>
        <Task text={'Task 12'}/>
        <Task text={'Task 13'}/>
        <Task text={'Task 14'}/>
        <Task text={'Task 15'}/>
        <Task text={'Task 16'}/>
        <Task text={'Task 17'}/>
        <Task text={'Task 18'}/>
        <Task text={'Task 19'}/>
        <Task text={'Task 20'}/>
        
        
        
        
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
  },
  goalWrapper:{
    margin:0,
    marginLeft:-20,
    // borderColor: 'red',
    // borderWidth:3,
  },
  header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    
    gap:20,
  },
  title: {
    fontSize: 80,
    fontFamily: 'Ticketing',
  },
  goals: {
    // borderColor: 'blue',
    // borderWidth:3,
    padding:10,
    display:'flex',
    flexDirection:'column',
    
  },
});
