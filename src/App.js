import React from 'react';
import './style/App.css';
import ButtonsGrid from './components/buttons/ButtonsGrid';
import ToggleSwitch from './components/switch/ToggleSwitch';
import VolumeSlider from './components/switch/VolumeSlider';
import FontAweBtns from './components/buttons/FontAweBtns';
import GlobalState from './context/GlobalState';

const App = () => {
	return (
		<GlobalState>
			<div className='container'>
				<div id='drum-pad'>
					<ButtonsGrid />
					<ToggleSwitch />
					<VolumeSlider />
					<FontAweBtns />
				</div>
			</div>
		</GlobalState>
	);
};

export default App;
