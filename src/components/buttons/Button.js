import React, { useEffect, useContext, Fragment } from 'react';
import GlobalContext from '../../context/globalContext';

const Button = ({ id, letter, src, audio }) => {
	const globalContext = useContext(GlobalContext);

	useEffect(() => {
		// mimics componentDidMount
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			// mimics componentWillUnmount
			document.removeEventListener('keydown', handleKeyDown);
		};
	});

	const handleClick = () => {
		// playing audio if the drum box is on
		if (globalContext.checked) {
			// getting the audio volume from the global state
			document.getElementById(letter).volume = globalContext.volume;

			// changing button color on key pressed
			var buttonId = document.getElementById(id);
			buttonId.style.backgroundColor = 'darksalmon';
			setTimeout(() => (buttonId.style.backgroundColor = 'azure'), 100);

			// playing audio
			audio.play();
			audio.currentTime = 0;
		}
	};

	const handleKeyDown = e => {
		if (e.keyCode === letter.charCodeAt() && globalContext.checked) {
			// getting the audio volume from the global state
			document.getElementById(letter).volume = globalContext.volume;

			// changing button color on key pressed
			var buttonId = document.getElementById(id);
			buttonId.style.backgroundColor = 'darksalmon';
			setTimeout(() => (buttonId.style.backgroundColor = 'azure'), 100);

			// playing audio
			audio.play();
			audio.currentTime = 0;
		}
	};

	return (
		<Fragment>
			<button onClick={handleClick} id={id} letter={letter} src={src}>
				{letter}
			</button>
			<audio
				id={letter}
				className='clip'
				src={src}
				ref={ref => (audio = ref)}
			></audio>
		</Fragment>
	);
};

export default Button;
