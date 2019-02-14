import React from 'react';


const EarthquakeList = (props) =>{
	const earthquakeList = props.earthquakes.map((earthquake, i)=>{
		return (
			<li key={i}>
				<p>Magnitude: {earthquake.properties.mag}</p>
				<p>Date: {new Date(earthquake.properties.time).toString()}</p>
				<p>Longitude: {earthquake.geometry.coordinates[0]}</p>
				<p>Latitude: {earthquake.geometry.coordinates[1]}</p>
				<p>Altitude: {earthquake.geometry.coordinates[2]}</p>
			</li>
		)
	})
	return(
		<ul>
			{earthquakeList}
		</ul>
	)
}

export default EarthquakeList