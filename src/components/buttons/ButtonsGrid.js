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
		src: 'https://www.myinstants.com/media/sounds/snare.mp3',
	},
	{
		id: 'Bass 1',
		letter: 'W',
		src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3',
	},
	{
		id: 'Bongo',
		letter: 'E',
		src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav',
	},
	{
		id: 'Tom Tom',
		letter: 'A',
		src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav',
	},
	{
		id: 'Bass 3',
		letter: 'S',
		src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav',
	},
	{
		id: 'Shotgun',
		letter: 'D',
		src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav',
	},
	{
		id: 'High Hat',
		letter: 'Z',
		src: 'http://www.denhaku.com/r_box/tr707/closed.wav',
	},
	{
		id: 'Drum Hit',
		letter: 'X',
		src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3',
	},
	{
		id: 'Laser',
		letter: 'C',
		src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav',
	},
];

export default ButtonsGrid;
