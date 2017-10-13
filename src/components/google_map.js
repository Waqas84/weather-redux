import React, { Component } from "react";

// google maps api js file is already imported in the index.html
class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// now i can use this.refs.map to get access to this element
		// google maps will put the map in this div
		return <div ref="map" />;
	}
}

export default GoogleMap;
