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
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	console.log(state);
	return (
		<View>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Spacer>
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
			</Spacer>
		</View>
	);
};

TrackListScreen.navigationOptions = {
	title: "Tracks",
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
	},
});

export default TrackListScreen;
