import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	const onSubmit = ({ email, password }) => {
		signin({ email, password });
	};

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				title="SignIn to Tracker"
				buttonTitle="SignIn"
				onSubmit={onSubmit}
				errorMessage={state.errorMessage}
			/>
			<NavLink
				text="Do not have an account? Create a new account"
				routeName="SignUp"
			/>
		</View>
	);
};

SignInScreen.navigationOptions = () => {
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
});

export default SignInScreen;
