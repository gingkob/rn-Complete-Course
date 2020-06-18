import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const[text, setText] = useState("Flower")


  const options = ["Flower", "Katarina", "Ljubav", "Love"]

  const changeText = () => {
    let index = parseInt(Math.random()*4)
    setText(options[index])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.textInput} placeholder="Course Goal"/>
        <Button title="Click me!" onPress={changeText} color="green"/>
      </View>
        <View style={styles.body}>
        <Text>{text}</Text>
      </View>
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
    backgroundColor: 'gray'
  },
  textInput: {
    width: "70%",
    borderBottomColor: "green",
    borderBottomWidth:3
  }
});
