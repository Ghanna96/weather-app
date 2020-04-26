import React from 'react';
import WeatherIcon from './weatherIcon';

function Weather(props) {
	const {
		location,
		weather,
		temp,
		min,
		max,
		feels,
		icon,
		humidity,
		pressure,
		wind,
	} = props.data;
	return (
		<div className='card'>
			<div className='location'>
				<span>{location} </span>
			</div>

			<div className='weather'>
				<span>
					<WeatherIcon icon={icon} />
				</span>
				<span> {weather}</span>
			</div>
			<div className='temp'>
				<div> {temp} °C</div>
				<span>Feels like {feels} °C</span>
			</div>
			<div className='minmax'>
				<span>Max: {max} °C</span>
				<span>Min: {min} °C</span>
			</div>
			<div className='details'>
				<span>Humidity: {humidity} % </span>
				<span>Pressure: {pressure} hpa</span>
				<span>Wind: {wind} m/s</span>
			</div>
		</div>
	);
}
export default Weather;
