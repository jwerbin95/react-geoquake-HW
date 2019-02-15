import React from 'react';


const EarthquakeList = (props) =>{
	let cardColor = ""
	const earthquakeList = props.earthquakes.map((earthquake, i)=>{
		let center = {
					lat: earthquake.geometry.coordinates[1], 
					lng: earthquake.geometry.coordinates[0]
				}
		if(earthquake.properties.mag<2)
			cardColor="ui green fluid card"
		else if(earthquake.properties.mag<5 && earthquake.properties.mag>2)
			cardColor="ui yellow fluid card"
		else
			cardColor="ui red fluid card"
		return (
			<div className={cardColor} key={i}>
				<div className="content">
					<p>Magnitude: {earthquake.properties.mag}</p>
					<p>Date: {new Date(earthquake.properties.time).toString()}</p>
					<p>Location: {earthquake.properties.title}</p>
					<button className="ui button" onClick={props.changeLocation.bind(null, center, 11)}>Go To Location</button>
				</div>
			</div>
		)
	})
	return(
		<div className="ui cards">
			{earthquakeList}
		</div>
	)
}

export default EarthquakeList