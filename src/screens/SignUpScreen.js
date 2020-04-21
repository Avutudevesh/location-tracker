import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	const onSubmit = ({ email, password }) => {
		signup({ email, password });
	};

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				title="SignUp for tracker"
				buttonTitle="SignUp"
				onSubmit={onSubmit}
				errorMessage={state.errorMessage}
			/>
			<NavLink
				text="Already have an account? Sign in instead."
				routeName="SignIn"
			/>
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
});

export default SignUpScreen;
