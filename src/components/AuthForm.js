import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({ title, buttonTitle, onSubmit, errorMessage }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<Spacer>
				<Text h3>{title}</Text>
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
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={buttonTitle}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	errorMessage: {
		color: "red",
		marginHorizontal: 15,
	},
});

export default AuthForm;
