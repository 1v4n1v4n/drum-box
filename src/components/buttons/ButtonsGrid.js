import React from 'react';
import Button from './Button';

const ButtonsGrid = () => {
	return (
		<div id='buttons-grid'>
			{data.map(d => (
				<Button key={d.id} id={d.id} letter={d.letter} src={d.src} />
			))}
		</div>
	);
};

// needed list for importing audios
const data = [
	{
		id: 'Snare',
		letter: 'Q',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		id: 'Bass 1',
		letter: 'W',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		id: 'Bongo',
		letter: 'E',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		id: 'Tom Tom',
		letter: 'A',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		id: 'Bass 3',
		letter: 'S',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		id: 'Shotgun',
		letter: 'D',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		id: 'High Hat',
		letter: 'Z',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		id: 'Drum Hit',
		letter: 'X',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		id: 'Laser',
		letter: 'C',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

export default ButtonsGrid;
