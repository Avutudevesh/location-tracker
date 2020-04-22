import React, { useContext } from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	console.log(state);
	return (
		<View>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Text>TrackListScreen</Text>
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("TrackDetail", { _id: item._id })
							}
						>
							<ListItem chevron title={item.name} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
