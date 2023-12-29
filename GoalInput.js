import { useState } from 'react';
import {StyleSheet,TextInput,View,Button, Modal, Image} from 'react-native';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState(''); // empty strings
    // enteredGoalText string will be updated with setEnteredGoalText function

    function goalInputHandler(enteredText) {
        //  console.log(enteredText); // print it in our terminal
          setEnteredGoalText(enteredText);
        };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    

    return (
      <Modal visible={props.showModel} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/target.png')} />
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter your task' 
            onChangeText={goalInputHandler} // it didnt execute the function straight away because didnt put (). 
            // it will be activated when there is somechanges to the TextInput
            value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color= "#f07f14"></Button>
              </View>

              <View style={styles.button}>
                <Button 
                title="Add Task" 
                onPress={addGoalHandler}
                color= "#6295c4"
                ></Button>
              </View>

            </View>


        </View>
    </Modal>

    );

};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1, //this will take 1/5 of the appcontainer
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // this adjusts the button in the container.
       // marginBottom: 30, 
       // borderBottomWidth: 1,
       // borderBottomColor: '#6495ed',
        padding: 16,
        backgroundColor: '#02079e',
      },
  
      textInput: {
        borderWidth: 1,
        borderColor: '#D8ECFE',
        //6495ed
        borderRadius: 6,
        backgroundColor:'#D8ECFE',
        color: '#003CF6',
        width: '100%', // button will take the 30%
        marginBottom: 10,
        padding: 16
      },

      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16,
          marginBottom: 10,

      },

      button: {
        width: 90,
        marginHorizontal: 8
      },

      image: {
        width: 100,
        height: 100,
        //margin: 2,
        marginBottom: 20,
        

      },


});
