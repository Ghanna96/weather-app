import React from 'react';

function WeatherIcon(props) {
	let url = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;

	return (
		<span>
			<img src={url} alt=''></img>
		</span>
	);
}

export default WeatherIcon;
