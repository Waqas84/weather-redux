import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
	renderWeather(city) {
		const name = city.city.name;
		const temps = city.list.map(weather => weather.main.temp);
		const pressures = city.list.map(weather => weather.main.pressure);
		const humidities = city.list.map(weather => weather.main.humidity);
		const { lon, lat } = city.city.coord;
		console.log("lon, lat: ", lon, lat);

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color="blue" unit="K" />
				</td>
				<td>
					<Chart data={pressures} color="green" unit="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="black" unit="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
