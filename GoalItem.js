import {StyleSheet,Text,View, Pressable} from 'react-native';

function GoalItem(props) {
    return (
      <View style={styles.goalItem}>
          <Pressable 
                  android_ripple={{color:'#f07f14'}}
                  onPress={props.onDeteleItem.bind(this,props.id)}

                  // this for iOS
                  //style={({pressed}) => pressed && styles.pressedItem}
                  >
                  <Text style={styles.goalText}>{props.text} </Text>
              
          </Pressable>
      </View>
        );
};

export default GoalItem;

const styles = StyleSheet.create({

    goalItem: {
      margin: 8,
      //padding: 8,
      borderRadius: 6,
      backgroundColor: "#0A49AF",
      //color: "white",
    },

    // for iOS
    pressedItem: {
      opacity: 0.5
    },

    goalText: {
      color: 'white',
      padding: 8,
    },


});
