import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function App() {

  const [text, setText] = useState("")
  const [goals, setGoal] = useState([])
  const [finishedGoals, setFinishedGoal] = useState([])
  const [showFinished, setShowFinished] = useState(true);

  const addGoal = () => {
    setGoal(goals => [{ key: Math.random().toString(), value: text }, ...goals])
    setText("")
  }

  /*  const finishGoal = (finishedGoal) => {
     setFinishedGoal(finishedGoals => [...finishedGoals, finishedGoal])
   } */

  const removeGoal = index => {
    let goal = goals.filter(item => item.key != index)
    setGoal(goal)
  }

  const completeGoal = index => {
    let finishedGoal = goals.filter(item => item.key == index)
    setFinishedGoal(finishedGoals => [...finishedGoal, ...finishedGoals])
    let goal = goals.filter(item => item.key != index)
    setGoal(goal)
  }

  const showHideFinished = () => {
    setShowFinished(showFinished => !showFinished)
  } 

  const finishedGoalsContainer = finishedGoals.length ?
    <FlatList data={finishedGoals} renderItem={itemData => (
      <View style={{ flexDirection: "row", alignContent: "space-around", justifyContent: "center" }}>
        <Text style={styles.goalFinishedText}>
          {itemData.item.value}
        </Text>
      </View>)
    }
    extraData={finishedGoals}
    />
    : null

  // let allGoals = goals.map((goal, index) => <Text style={styles.goalText} key={index} onPress={index =>removeGoal(index)}>{index + 1}. {goal}</Text>).reverse()
  // const checkIcon = <Icon name="checksquareo" size={30} color="#900" style={styles.checkMark}/>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.textInput} placeholder="Course Goal" value={text} onChangeText={(text) => setText(text)} />
        <Button title="Click me!" onPress={addGoal} color="green" />
      </View>
     { goals.length ? <View style={styles.containerGoals}>
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
            onPress={completeGoal.bind(this, itemData.item.key)}>
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
      </View> : null }
      {finishedGoals.length ? <View style={styles.containerGoals}>
        <View style={{ flexDirection: "row", alignContent: "center", justifyContent: "center"}}>
          <Text style={styles.headerFinishedContainer} onPress={showHideFinished}>Finished</Text>
          <Icon.Button
            name="minussquare"
            size={30}
            color="red"
            style={styles.deleteMark}
            backgroundColor="none"
            onPress={()=> setFinishedGoal([])}>
          </Icon.Button>
        </View>
        {showFinished ? 
        { ...finishedGoalsContainer }        
        : null }
        </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  containerGoals: {
    marginVertical:10,
    borderWidth:1,
    borderRadius:5,
    padding: 10
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
  goalFinishedText: {
    backgroundColor: '#DA70D6',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    flex: 4,
    textDecorationLine: "line-through"
  },
  checkMark: {
    flex: 1
  },
  deleteMark: {
    flex: 1
  },
  headerFinishedContainer: {
    flex:4,
    backgroundColor:'#9ACD32',
    borderRadius:5,
    paddingLeft:10,
    paddingTop:15,
    textAlignVertical:"center",
    fontSize:16,
    fontWeight:"500"
  }
});
