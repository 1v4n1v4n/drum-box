import React, { useState, useContext } from 'react';
import Slider from 'react-rangeslider';
import GlobalContext from '../../context/globalContext';

const VolumeSlider = () => {
	const [volume, setVolume] = useState(1.0);
	const globalContext = useContext(GlobalContext);

	const handleOnChange = volume => {
		setVolume(volume);
		globalContext.getVolume(volume);
	};

	return (
		<div id='slider'>
			<span>Volume</span>
			<Slider
				value={Math.round(volume * 100) / 100}
				orientation='horizontal'
				onChange={handleOnChange}
				max={1.0}
				step={0.01}
				tooltip={false}
			/>
		</div>
	);
};

export default VolumeSlider;
