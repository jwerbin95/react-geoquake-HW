import React, { Component } from 'react';
import EarthquakeContainer from './EarthquakeContainer/EarthquakeContainer'
import MapContainer from './MapContainer/MapContainer'
class App extends Component {
  state={
    earthquakes: []
  }
  getEarthquakeData = (earthquakeData) =>{
    this.setState({
      earthquakes: earthquakeData
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer" id="mapContainer">
          <MapContainer earthquakes={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeContainer getEarthquakeData={this.getEarthquakeData}/>
        </div>
      </div>
    );
  }
}

export default App;
