import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
	const {
		state: { currentLocation },
	} = useContext(LocationContext);
	// let points = [];
	// for (let i = 0; i < 20; i++) {
	// 	points.push({
	// 		latitude: 37.33233 + i * 0.001,
	// 		longitude: -122.0312 + i * 0.001,
	// 	});
	// }
	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}
	return (
		<>
			<MapView
				style={styles.map}
				initialRegion={{
					...currentLocation.coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
				region={{
					...currentLocation.coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				{/* <Polyline coordinates={points} /> */}
			</MapView>
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});
export default Map;
