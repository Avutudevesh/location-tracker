import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../apis/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signup_error":
			return { ...state, errorMessage: action.payload };
		case "signup_success":
			return { errorMessage: "", token: action.payload };
		default:
			return state;
	}
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post("/signup", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signup_success", payload: response.data.token });
		navigate("TrackList");
	} catch (e) {
		dispatch({ type: "signup_error", payload: "Something went wrong" });
	}
};

const signin = (dispatch) => {
	return ({ email, password }) => {};
};

const signout = (dispatch) => {
	return () => {};
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{ token: null, errorMessage: "" }
);
