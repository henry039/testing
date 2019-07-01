import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

export default () => {
	return (
		<View style={styles.container}>
			{arr.map((item) => (
				<View key={item} style={styles.items}>
					<View style={styles.innerItems} />
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	items: {
		width: '25%',
		height: '25%',
		backgroundColor: 'grey',
		padding: 10
	},
	innerItems: {
		flex: 1,
		backgroundColor: 'black'
	}
});
