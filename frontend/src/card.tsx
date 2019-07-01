import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, AsyncStorage, TouchableOpacity, Button } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { shuffle } from './utils';

const shouldFlip = (selected2Cards: Array<string>, matchedPair: Array<string>, color: string): boolean =>
	selected2Cards.length === 2 && matchedPair.indexOf(color) > 0 ? true : false;
const shouldClickable = (selected2Cards: Array<string>, matchedPair: Array<string>, color: string): boolean =>
	selected2Cards.length === 2 && matchedPair.indexOf(color) > 0 ? false : true;

const alwaysFalse = () => false;

export default (props: any) => {
	const { colors } = props;
	const [ selected2Cards, setCards ] = useState<Array<string>>([]);
	const [ flipStatus, setStatus ] = useState(Array(16).fill(false));

	// useEffect(
	// 	() => {
	// 		setStatus(Array(16).fill(false));
	// 	},
	// 	[ selected2Cards ]
	// );
	// useEffect(
	// 	() => {
	// 		if (selected2Cards.length === 2) {
	// 			selected2Cards.forEach(() => {
	// 				if (selected2Cards[0] === selected2Cards[1]) {
	// 					setMatchedPair([ ...matchedPair, selected2Cards[0] ]);
	// 					setCards([]);
	// 					// score + 5
	// 				} else {
	// 					setCards([]);
	// 					// score - 1
	// 				}
	// 			});
	// 		}
	// 	},
	// 	[ selected2Cards ]
	// );
	return (
		<View style={styles.container}>
			{colors.map((item: string, index: number) => (
				<Fragment>
					<TouchableOpacity onPress={() => console.log('skajdfhlkajdhsf')} />
					<View key={index} style={styles.items}>
						<FlipCard
							friction={6}
							flip={flipStatus[index]}
							// clickable={shouldClickable(matchedPair, colors[index])}
						>
							<View style={styles.innerFrontItems} />
							<View style={[ styles.innerBackItems, { backgroundColor: item } ]} />
						</FlipCard>
					</View>
				</Fragment>
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
	innerFrontItems: {
		borderRadius: 6,
		flex: 1,
		backgroundColor: 'black'
	},
	innerBackItems: {
		borderRadius: 6,
		flex: 1
		// backgroundColor: 'pink'
	}
});
