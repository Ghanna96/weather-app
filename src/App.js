import React, { Component } from 'react';
import Form from './Components/form';
import Weather from './Components/weather';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			json: [],
			actualData: [],
		};
	}
	//extract the info we're interested *incomplete
	getData = () => {
		const obj = {
			location: '',
			weather: '',
			temp: '',
			feels: '',
		};
		const data = this.state.json;
		obj.location = data.name;
		obj.weather = data.weather[0].description;
		obj.temp = data.main.temp;
		obj.feels = data.main.feels_like;
		this.setState({ actualData: obj });
		console.log('obj ', obj);
	};
	getApi = async (city) => {
		let url, place;

		if (city) {
			place = city;
		} else {
			place = this.state.location;
		}
		try {
			url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=73bb57b7d1fab98dc011bd2055bf4c84`;
			const data = await fetch(url, { mode: 'cors' });
			const weather = await data.json();
			this.setState({ json: weather });
			this.getData();
		} catch (err) {
			console.log(err);
		}
	};
	componentDidMount() {
		//fetch api and save obj in state
		this.getApi('Brescia');
	}
	locationInput = (e) => {
		let city = this.state.location;
		city = e.target.value;
		this.setState({ location: city });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.getApi();
		console.log(this.state.actualData);
		// this.getWeatherData();
	};
	render() {
		return (
			<div className='ui center aligned grid'>
				<div className='ui container'>
					<header>
						<h3 className='ui header'>Weather App</h3>
					</header>

					<Form onLocation={this.locationInput} onSubmit={this.handleSubmit} />
					<div className='ui teal card'>
						<Weather data={this.state.actualData} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
