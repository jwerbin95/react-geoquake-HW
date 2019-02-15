import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList'

export default class EarthquakeContainer extends Component{

	state={
		earthquakes: []
	}
	getFormattedDate(date, daysPast) {
	  let year = date.getFullYear();

	  let month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;

	  let day = (date.getDate()-daysPast).toString();
	  day = day.length > 1 ? day : '0' + day;
	  
	  return year + '-' + month + '-' + day;
	}

	getEarthquakes = async () => { 
		try{
			let today = new Date()
			let earthquakes = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${this.getFormattedDate(today, 7)}&endtime=${this.getFormattedDate(today, 0)}`)
			let earthquakesJSON = await earthquakes.json()
			this.setState({
				earthquakes: earthquakesJSON.features
			})
			await this.props.getEarthquakeData(this.state.earthquakes)
			return earthquakesJSON.features
		}
		catch(error){
			console.log(error.stack)
			return error
		}
	}
	componentDidMount(){
		let callback=this.getEarthquakes
		this.getEarthquakes().then(data=>{
			console.log("Component mounted successfully")
		})
		setInterval(function(){callback().then(data=>{
			console.log("Fetched Earthquake Data!")
		})}, 300000)
	}
	render(){
		if(this.state.earthquakes[0]===undefined){
			return <h1>Loading...</h1>
		}
		else{
			return(
				<div>
					<EarthquakeList earthquakes={this.state.earthquakes} changeLocation={this.props.changeLocation}/>
				</div>
			)
		}
	}
}