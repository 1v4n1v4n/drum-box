import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import GlobalContext from '../../context/globalContext';

const ToggleSwitch = () => {
	// mimics state and setState()
	const [checked, setChecked] = useState(true);
	const globalContext = useContext(GlobalContext);

	const onChange = checked => {
		setChecked(checked);
		// passing the switch state(checked) in global context
		globalContext.getChecked(checked);
	};

	return (
		<label id='switch'>
			<span>Power</span>
			<Switch onChange={onChange} checked={checked} id='switch-handle' />
		</label>
	);
};

export default ToggleSwitch;
