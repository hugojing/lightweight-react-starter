import React from 'react';

var style = {
	backgroundColor: '#EEE',
	textAlign: 'center'
};

class Hello extends React.Component {
	render() {
		return (
			<div style={style}>
			<br />
			<h1>Lightweight-React-Starter</h1>
			<br />
			</div>
		)
	}
}

export {
	Hello
};