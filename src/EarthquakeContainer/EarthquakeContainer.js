import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList'

export default class EarthquakeContainer extends Component{
	state={
		earthquakes: []
	}
	getEarthquakes = async () => { 
		try{
			let earthquakes = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
			let earthquakesJSON = await earthquakes.json()
			this.setState({
				earthquakes: earthquakesJSON.features
			})
			await this.props.getEarthquakeData(this.state.earthquakes)
		}
		catch(error){
			console.log(error.stack)
			return error
		}
	}
	componentDidMount(){
		this.getEarthquakes().then(data=>{
			console.log("Component mounted successfully")
		})
	}
	render(){
		if(this.state.earthquakes[0]===undefined){
			return <h1>Loading...</h1>
		}
		else{
			return(
				<div>
					<EarthquakeList earthquakes={this.state.earthquakes}/>
				</div>
			)
		}
	}
}