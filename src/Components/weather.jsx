import React from 'react';

function Weather(props) {
	const { location, weather, temp, feels } = props.data;
	return (
		<div>
			<div>city: {location} </div>
			<div>weather: {weather}</div>
			<div>temp: {temp} </div>
			<div>feels: {feels} </div>
		</div>
	);
}
export default Weather;
