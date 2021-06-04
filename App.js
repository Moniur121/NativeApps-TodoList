import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Task from './components/Task';
export default function App() {
  const[task,setTask]=React.useState();
  const[taskItems, setTaskItems]=React.useState([]);
    const handleAddTask=() =>{
         setTaskItems([...taskItems,task])
         setTask(task)
         console.log(task)
    }
    const completeTask=(index) =>{
      let itemsCopy=[...taskItems];
      itemsCopy.splice(index,1)
      setTaskItems(itemsCopy)
    }
  return (
    <View style={styles.container}>
      {/* todays tasks */}
       <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Today's Task</Text>
            <View style={styles.items}>
              {/* this is where the tasks will go! */}
              {
                taskItems.map((item,index)=>{
                  return(
                    <TouchableOpacity key={index} onPress={()=> completeTask()}>
                      <Task  text={item}></Task>
                    </TouchableOpacity>
                  )
                })
              }
              {/* <Task text={'Task 1'}></Task>
              <Task text={'Task 2'}></Task> */}
            </View>
       </View>
       {/* Write a Task */}
        <KeyboardAvoidingView   style={styles.writeTaskWrapper}>
           <TextInput  style={styles.input} placeholder={'Please Enter Your Task'} value={task} onChangeText={text=>setTask(text)}></TextInput>
           <TouchableOpacity onPress={()=> handleAddTask()}>
             <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
             </View>
           </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
     
  },
  item: {
    marginTop:30
  },
  writeTaskWrapper:{
    
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom:'60',
    marginTop:120

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
     borderRadius:60,
     borderWidth:1,
     width: 260,
     borderColor:'#C0C0C0'
  },
  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#C0C0C0',
    borderWidth:1
  },
   

});
