
import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import Goalitem from './components/Goalitem';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([])
  const [isAddMode, setisAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setcourseGoals(currentgoals => [...currentgoals, { key: Math.random().toString(), value: enteredGoal }])
    console.log("hello", enteredGoal);  
    console.log("current goal",courseGoals);
    setisAddMode(false)

  }
  const deleteGoalHandler=(goalId)=>{
    console.log(goalId)
    setcourseGoals(currentgoals=>{
      return currentgoals.filter((goal)=>
       goal.key!==goalId
      )
    })

  }
  const cancelHandler=()=>{
    setisAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={()=>setisAddMode(true)} />
      <GoalInput sendGoals={addGoalHandler} visible={isAddMode} onCancel={cancelHandler} />
      <FlatList keyExtractor={(item,index)=>item.key} data={courseGoals} renderItem={itemdata =>
        <Goalitem title={itemdata.item.value} 
        id={itemdata.item.key} onDelete={deleteGoalHandler} />} />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },


});
