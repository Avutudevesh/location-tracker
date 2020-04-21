import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text style={{ fontSize: 48 }}>Account Screen</Text>
			<Spacer>
				<Button title="SignOut" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
