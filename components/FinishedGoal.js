import React from "react"
import { View, FlatList, Text, StyleSheet } from 'react-native';

const FinishedGoal = props => {
	return (
		<FlatList data={props.finishedGoals} renderItem={itemData => (
			<View style={{ flexDirection: "row", alignContent: "space-around", justifyContent: "center" }}>
				<Text style={styles.goalFinishedText}>
					{itemData.item.value}
				</Text>
			</View>)
		}
			extraData={props.finishedGoals}
		/>
	)

}

const styles = StyleSheet.create({
	goalFinishedText: {
		backgroundColor: '#DA70D6',
		borderRadius: 5,
		marginVertical: 5,
		padding: 10,
		flex: 4,
		textDecorationLine: "line-through"
	},
})

export default FinishedGoal;