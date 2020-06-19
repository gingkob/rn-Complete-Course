import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState("")
  const [goals, setGoal ] = useState([])

  const addGoal = () => {
    setGoal(currentGoals =>[...currentGoals, {key: Math.random().toString(), value:text}])
    setText("")
  }

  const removeGoal = index =>{    
    goals = goals.filter(item => item.key != index)
    setGoal(goals)
  }

  // let allGoals = goals.map((goal, index) => <Text style={styles.goalText} key={index} onPress={index =>removeGoal(index)}>{index + 1}. {goal}</Text>).reverse()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.textInput} placeholder="Course Goal" value={text} onChangeText={(text)=>setText(text)}/>
        <Button title="Click me!" onPress={addGoal} color="green"/>
      </View>
      <FlatList data={goals} renderItems={ itemData =>( <Text style={styles.goalText}>{itemData.item.value}</Text>)} />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30
  },
  header: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-evenly",
    marginVertical:10,
  },
  body: {
    marginVertical:10,
  },
  textInput: {
    width: "70%",
    borderBottomColor: "green",
    borderBottomWidth:3
  },
  goalText: {
    backgroundColor: '#B2FFFF',
    borderRadius: 5,
    marginVertical:5,
    padding:10,
  }
});
