import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../apis/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signin_error":
			return { ...state, errorMessage: action.payload };
		case "signin_success":
			return { errorMessage: "", token: action.payload };
		case "clear_error":
			return { ...state, errorMessage: "" };
		case "signout":
			return { token: null, errorMessage: "" };
		default:
			return state;
	}
};

const tryLocalSignIn = (dispatch) => async () => {
	const token = await AsyncStorage.getItem("token");
	if (token) {
		dispatch({ type: "signin_success", payload: token });
		navigate("TrackList");
	} else {
		navigate("loginFlow");
	}
};

const clearErrorMessage = (dispatch) => {
	return () => {
		dispatch({ type: "clear_error" });
	};
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post("/signup", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signin_success", payload: response.data.token });
		navigate("TrackList");
	} catch (e) {
		dispatch({ type: "signin_error", payload: "Something went wrong" });
	}
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post("/signin", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signin_success", payload: response.data.token });
		navigate("TrackList");
	} catch (e) {
		dispatch({ type: "signin_error", payload: "Something went wrong" });
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem("token");
	dispatch({ type: "signout" });
	navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignIn },
	{ token: null, errorMessage: "" }
);
