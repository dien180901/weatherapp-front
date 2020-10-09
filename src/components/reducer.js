let initialState = {
	hourly: [],
	error: "",
};
const weatherchange = (state = initialState, action) => {
	let { type, payload } = action;

	switch (type) {
		case "WEATHER_REQUEST":
			state = { ...state };
			break;
		case "WEATHER_REQUEST_SUCCESS":
			state.hourly = payload;
			state = { ...state };
			break;
		case "WEATHER_REQUEST_FAIL":
			state.error = payload;
			state = { ...state };

			break;
		default:
			return { ...state };
	}
	return { ...state };
};
export default weatherchange;
