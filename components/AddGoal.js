import React from "react"
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddGoal = props => {

	return (
		<View style={styles.header}>
			<TextInput
				style={styles.textInput}
				placeholder="Course Goal"
				value={props.text}
				onChangeText={props.changeText} />
			<Button title="Click me!" onPress={props.addGoal} color="green" />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
	},
	textInput: {
    width: "70%",
    borderBottomColor: "green",
    borderBottomWidth: 3
  }
})

export default AddGoal;