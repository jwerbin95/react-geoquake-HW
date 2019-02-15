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
          <div class="title">
            <h2 class="ui header"><i aria-hidden="true" class="list icon"></i><div class="content">Weekly Earthquake Report</div></h2>
          </div>
          <EarthquakeContainer getEarthquakeData={this.getEarthquakeData} changeLocation={this.changeLocation}/>
        </div>
      </div>
    );
  }
}

export default App;
