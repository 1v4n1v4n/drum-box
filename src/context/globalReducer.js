import { GET_CHECKED, GET_VOLUME } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_CHECKED:
			return {
				...state,
				checked: action.payload,
			};

		case GET_VOLUME:
			return {
				...state,
				volume: action.payload,
			};

		default:
			return state;
	}
};
