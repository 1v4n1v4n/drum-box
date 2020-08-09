import React from 'react';

const FontAweBtns = () => {
	const postTwitter = () =>
		openUrl(
			'https://twitter.com/intent/tweet?hashtags=drum,machine&text=Check out this cool drum machine! https://1v4n1v4n.github.io/drum-box/'
		);

	const openUrl = url => {
		window.open(
			url,
			'Share',
			'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0'
		);
	};
	return (
		<div id='font-buttons'>
			<button onClick={postTwitter}>
				<i className='fab fa-twitter' /> Tweet
			</button>
			<span style={{ visibility: 'hidden' }}>i</span>
			<button>
				<i className='fab fa-facebook' /> Share
			</button>
		</div>
	);
};

export default FontAweBtns;
