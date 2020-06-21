import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AddGoal from './components/AddGoal'
import FinishedGoal from './components/FinishedGoal'
import GoalsList from './components/GoalsList'


export default function App() {

  const [text, setText] = useState("")
  const [goals, setGoal] = useState([])
  const [finishedGoals, setFinishedGoal] = useState([])
  const [showFinished, setShowFinished] = useState(true);

  const addGoal = () => {
    setGoal(goals => [{ key: Math.random().toString(), value: text }, ...goals])
    setText("")
  }

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
    <FinishedGoal finishedGoals={finishedGoals} />
    : null

  return (
    <View style={styles.container}>
      <AddGoal text={text} changeText={(text) => setText(text)} addGoal={addGoal}/>
     { goals.length ? <View style={styles.containerGoals}>
        <FlatList data={goals} renderItem={itemData => (
        <View style={{ flexDirection: "row", alignContent: "space-around", justifyContent: "center" }}>
          <Text style={styles.goalText}>{itemData.item.value} </Text>
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
  body: {
    marginVertical: 10,
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
