import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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

      

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addingFeature}
      >
        <TextInput style={styles.input} placeholder={"Mention ur Goals"}/>

        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" color='black' size={20} />
        </TouchableOpacity>

        
      </KeyboardAvoidingView>

        {/* Adding Feature -> Typing Space*/}
        
        {/* Adding Feature -> Adding Button*/}


      {/* Goals */}
      <ScrollView style={styles.goals}>
        <Task text={'Task 1 hi hello hwo are u webewe asda dfgd kgkjgj sdfsd sdf sd fsd fs df ss df sds sd fs dfs d s d fsd fs d fs df sd fs d fs d s df sdfs df sd f sd fs d fs df sdf sd fs'} onToggleCompletion={function (completed: boolean): void {
          throw new Error("Function not implemented.");
        } }/>
        
        
        
        
        
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
    padding:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:60,
  },

  input:{
    fontSize: 20,
    fontFamily: 'Ticketing',
    
    width:340,
    minHeight:50,
    padding:15,
    backgroundColor: '#EDF6F9',
    borderRadius:10,
    elevation:5,
    flexWrap:'wrap',
  },


  addButton: {
    backgroundColor: '#55bcf6',
    width: 45,
    height: 45,
    borderRadius: 10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
  },


  goals: {
    // borderColor: 'blue',
    // borderWidth:3,
    padding:15,
    display:'flex',
    flexDirection:'column',
    
  },
});
