import React from 'react';


const EarthquakeList = (props) =>{
	const earthquakeList = props.earthquakes.map((earthquake, i)=>{
		return (
			<li key={i}>
				<p>Magnitude: {earthquake.properties.mag}</p>
				<p>Date: {new Date(earthquake.properties.time).toString()}</p>
				<p>Location: {earthquake.properties.title}</p>
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