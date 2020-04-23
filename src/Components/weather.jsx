import React from 'react';

function Weather(props) {
	const { location, weather, temp, feels } = props.data;
	return (
		<div className='card'>
			<ul>
				<li id='city'>{location} </li>
				<li id='temp'> {temp} °C</li>
				<li>feels {feels} °C</li>
				<li> {weather}</li>
			</ul>
		</div>
	);
}
export default Weather;
