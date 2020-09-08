import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, { key: Math.random().toString(), value: goalTitle }
    ])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.key}
      data={courseGoals} 
      renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} /> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#f5f5f5',
    flex: 1
  }
});