import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import { navigate } from "../navigationRef";

const SignUpScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3>Sign Up for Tracker</Text>
			</Spacer>
			<Spacer />
			<Input
				label="Email"
				autoCapitalize="none"
				autoCorrect={false}
				value={email}
				onChangeText={setEmail}
			/>
			<Spacer />
			<Input
				secureTextEntry
				label="Password"
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={setPassword}
			/>
			<Spacer />
			{state.errorMessage ? (
				<Text style={styles.errorMessage}>{state.errorMessage}</Text>
			) : null}
			<Spacer>
				<Button title="SignUp" onPress={() => signup({ email, password })} />
			</Spacer>
			<TouchableOpacity onPress={() => navigation.navigate("Signin")}>
				<Spacer>
					<Text style={styles.link}>
						Already have an account? Sign in instead.
					</Text>
				</Spacer>
			</TouchableOpacity>
		</View>
	);
};

SignUpScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
		marginBottom: 200,
	},
	errorMessage: {
		color: "red",
		marginHorizontal: 15,
	},
	link: {
		color: "blue",
	},
});

export default SignUpScreen;
