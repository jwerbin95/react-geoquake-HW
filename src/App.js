import React, { Component } from 'react';
import EarthquakeContainer from './EarthquakeContainer/EarthquakeContainer'
import MapContainer from './MapContainer/MapContainer'
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  state={
    earthquakes: [],
    center: {
      lat: 30.267153,
      lng: -97.7430608
    },
    zoom: 11
  }
  getEarthquakeData = (earthquakeData) =>{
    this.setState({
      earthquakes: earthquakeData
    })
  }
  changeLocation = (newCenter, newZoom) =>{
    this.setState({
      center: newCenter,
      zoom: newZoom
    })
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer" id="mapContainer">
          <MapContainer 
            earthquakes={this.state.earthquakes} 
            center={this.state.center} 
            zoom={this.state.zoom} 
          />
        </div>
        <div className="quakeContainer">
          <div className="title">
            <h2 className="ui header"><i aria-hidden="true" className="list icon"></i><div className="content">Weekly Earthquake Report</div></h2>
          </div>
          <EarthquakeContainer getEarthquakeData={this.getEarthquakeData} changeLocation={this.changeLocation}/>
        </div>
      </div>
    );
  }
}

export default App;
