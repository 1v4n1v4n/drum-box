import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import { GET_CHECKED, GET_VOLUME } from '../types';

const GlobalState = props => {
	const initialState = { checked: true, volume: 1.0 };

	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	// Search Users
	const getChecked = async checked => {
		dispatch({ type: GET_CHECKED, payload: checked });
	};

	const getVolume = async volume => {
		dispatch({ type: GET_VOLUME, payload: volume });
	};

	return (
		<GlobalContext.Provider
			value={{
				checked: state.checked,
				volume: state.volume,
				getChecked,
				getVolume,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
