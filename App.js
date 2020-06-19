import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function App() {

  const [text, setText] = useState("")
  const [goals, setGoal] = useState([])
  const addGoal = () => {
    setGoal(goals => [...goals, { key: Math.random().toString(), value: text }])
    setText("")
  }

  const removeGoal = index => {

    let goal = goals.filter(item => item.key != index)
    setGoal(goal)
  }

  // let allGoals = goals.map((goal, index) => <Text style={styles.goalText} key={index} onPress={index =>removeGoal(index)}>{index + 1}. {goal}</Text>).reverse()
  // const checkIcon = <Icon name="checksquareo" size={30} color="#900" style={styles.checkMark}/>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.textInput} placeholder="Course Goal" value={text} onChangeText={(text) => setText(text)} />
        <Button title="Click me!" onPress={addGoal} color="green" />
      </View>
      <FlatList data={goals} renderItem={itemData => (
        <View style={{ flexDirection: "row", alignContent: "space-around", justifyContent: "center" }}>
          <Text style={styles.goalText}>{itemData.item.value} </Text>
          {/* {checkIcon}  */}
          <Icon.Button
            name="checksquareo"
            size={30}
            color="green"
            style={styles.checkMark}
            backgroundColor="none"
            onPress={removeGoal.bind(this, itemData.item.key)}>
          </Icon.Button>
          <Icon.Button
            name="minussquare"
            size={30}
            color="red"
            style={styles.deleteMark}
            backgroundColor="none"
            onPress={removeGoal.bind(this, itemData.item.key)}>
          </Icon.Button>
        </View>)}
        extraData={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  body: {
    marginVertical: 10,
  },
  textInput: {
    width: "70%",
    borderBottomColor: "green",
    borderBottomWidth: 3
  },
  goalText: {
    backgroundColor: '#B2FFFF',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    flex: 4
  },
  checkMark: {
    flex: 1
  },
  deleteMark: {
    flex: 1
  }
});
