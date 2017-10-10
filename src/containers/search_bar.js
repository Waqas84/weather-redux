import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
	state = {
		term: ""
	};

	onInputChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	onFormSubmit = event => {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		console.log(this.state.term)
		this.setState({ term:'' });

	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					className="form-control"
					placeholder=" Get a five-day forcast"
					value={this.state.term}
					onChange={this.onInputChange("term")}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather } , dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
