import React, { useState } from 'react';
import { shuffle } from './src/utils';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Card from './src/card';

const colorPair = [ 'pink', 'red', 'blue', 'green', 'yellow', 'white', 'lime', 'purple' ];
const colors = [ ...colorPair, ...colorPair ];

export default () => {
	const [ count, setCount ] = useState(0);
	const [ colorSet ] = useState(shuffle(colors));

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<Text style={{ fontSize: 50 }}>💥</Text>
				<Text>Scores : {count}</Text>
				<Button title="High Scores" onPress={() => setCount(count + 1)} />
				<Button title="reset all" onPress={() => console.log('sadh')} />
			</View>
			<View style={styles.cardSection}>
				<Card colors={colorSet} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'pink'
	},
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: '10%'
	},
	cardSection: {
		height: '90%',
		width: '100%'
	}
});
