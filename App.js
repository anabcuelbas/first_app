import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('')
  const [dayTasks, setDayTasks] = useState([])

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText)
  }

  const addTaskHandler = () => {
    setDayTasks(currentTasks => [
      ...currentTasks, enteredTask
    ])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="New task" 
        style={styles.input}
        onChangeText={taskInputHandler}
        value={enteredTask}
        />
        <Button title="ADD" onPress={addTaskHandler}/>
      </View>
      <ScrollView>
        {dayTasks.map((task) =>
          <View key={task} style={styles.listItem}>
            <Text>{task}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
    borderColor: 'black',
    borderWidth: 1
  }
});

//Using FlatList instead of ScrollView

/* const addTaskHandler = () => {
  setDayTasks(currentTasks => [
    ...currentTasks,
    { key: Math.random().toString(), value: enteredTask }
  ])
} */

{/* <FlatList
      //keyExtractor={(item, index) => item.uid}
      data={dayTasks} 
      renderItem={itemData => {
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      }}
      /> */}