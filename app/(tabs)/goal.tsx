import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <View style={styles.addingFeature}>
        <Text>Heelo</Text>
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" color='black' size={20} />
        </TouchableOpacity>
      </View>
        {/* Adding Feature -> Typing Space*/}
        
        {/* Adding Feature -> Adding Button*/}


      {/* Goals */}
      <ScrollView style={styles.goals}>
        <Task text={'Task 1 hi hello hwo are u webewe asda dfgd kgkjgj sdfsd sdf sd fsd fs df ss df sds sd fs dfs d s d fsd fs d fs df sd fs d fs d s df sdfs df sd f sd fs d fs df sdf sd fs'}/>
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

  addingFeature: {
    borderColor: 'green',
    borderWidth:3,
    padding:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:60,
  },



  addButton: {
    backgroundColor: '#55bcf6',
    width: 40,
    height: 40,
    borderRadius: 10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
  },


  goals: {
    // borderColor: 'blue',
    // borderWidth:3,
    padding:10,
    display:'flex',
    flexDirection:'column',
    
  },
});
