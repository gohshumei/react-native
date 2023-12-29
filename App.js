import { StyleSheet, View,
FlatList,Button,} from 'react-native';

import {StatusBar} from 'expo-status-bar';

import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
// modalIsVisible is the variable, setModalIsVisible is the function
  const [modalIsVisible, setModalIsVisible] = useState(false);

//list of goals; 
  const [courseGoals, setCourseGoals] = useState([]) //empty array

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
      console.log(enteredGoalText);
      
      setCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        {text: enteredGoalText, id: Math.random().toString()},
      ]); 
      //... is append

      endAddGoalHandler();
    }

  function deleteGoalHandler(id){
    //console.log('DELETE');
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id) // filter can call a new array
    }

    );
  }


  return (
    <>
     <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button 
            title="Add New Task" 
            color="#6295c4"
            onPress={startAddGoalHandler}
            
        />
      </View>

      <GoalInput showModel={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>

      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
            <GoalItem 
                    text={itemData.item.text} 
                    id = {itemData.item.id}
                    onDeteleItem={deleteGoalHandler}
                    />
          );
        }} 

        keyExtractor={(item,index)=>{return item.id;}}
        
        alwaysBounceVertical={false}

        />
      </View>
    </View>
    
    
    </>
   

  );
}

const styles = StyleSheet.create({

    appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
      flex: 1,
      
      
    },

    goalsContainer:{
      flex: 4, //this will take 4/5 of the appcontainer
    },

    button:{
    paddingBottom: 8,
    paddingTop: 8,

    },

});
