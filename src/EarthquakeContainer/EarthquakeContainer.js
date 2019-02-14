import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList'

export default class EarthquakeContainer extends Component{

	state={
		earthquakes: []
	}
	getFormattedDate(date) {
	  let year = date.getFullYear();

	  let month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;

	  let day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;
	  
	  return year + '-' + month + '-' + day;
	}
	getFormattedDateMinusSeven(date) {
	  let year = date.getFullYear();

	  let month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;

	  let day = (date.getDate()-7).toString();
	  day = day.length > 1 ? day : '0' + day;
	  
	  return year + '-' + month + '-' + day;
	}

	getEarthquakes = async () => { 
		try{
			let today = new Date()
			let earthquakes = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${this.getFormattedDateMinusSeven(today)}&endtime=${this.getFormattedDate(today)}`)
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