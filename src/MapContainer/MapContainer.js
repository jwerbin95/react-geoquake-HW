import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image, width, height }) => <img alt="earthquake icon" className="mapPin" src={image} width={width+'px'} height={height+'px'}></img>;

export default class MapContainer extends Component {
  render() {
    return (
      <div id="map" style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
        {
        	this.props.earthquakes.map((earthquake, i)=>{
        		let markerIcon = ""
        		if(earthquake.properties.mag<2)
					markerIcon="images/earthquakeGreen.png"
				else if(earthquake.properties.mag<5 && earthquake.properties.mag>2)
					markerIcon="images/earthquakeYellow.png"
				else
					markerIcon="images/earthquakeRed.png"
	        	return (
	        		<AnyReactComponent 
	        		key={i}
	        		lat={earthquake.geometry.coordinates[1]}
	        		lng={earthquake.geometry.coordinates[0]}
	        		image={markerIcon}
	        		width={(earthquake.properties.mag*4)+10}
	        		height={(earthquake.properties.mag*4)+10}
	        		/>
	        	)
        	})
        }
        </GoogleMapReact>
      </div>
    );
  }
}