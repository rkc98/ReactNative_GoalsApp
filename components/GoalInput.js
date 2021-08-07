import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setenteredGoal] = useState('')
  

  const goalInputHnadler = (enteredtext) => {
    setenteredGoal(enteredtext)
  }

  const addGoal=()=>{
    props.sendGoals(enteredGoal)
    setenteredGoal('')

  }
  
    return (
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputConatiner}>
        <TextInput placeholder="enter your goals"
          style={styles.input}
          onChangeText={goalInputHnadler}
          value={enteredGoal} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
        <Button title="Add" onPress={addGoal} />
        </View>
        </View>
      </View>
      </Modal>
    )

}
const styles = StyleSheet.create({
    inputConatiner: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      },
      input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom:10,
        width: "80%"
      },
      buttonContainer:{
        width:"60%",
        flexDirection:'row',
        justifyContent:'space-between'
      },
      button:{
        width:"40%"
      }
    
})
export default GoalInput
