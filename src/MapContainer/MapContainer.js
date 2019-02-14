import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image, width, height }) => <img alt="earthquake icon" className="mapPin" src={image} width={width+'px'} height={height+'px'}></img>;

export default class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.7430608
    },
    zoom: 11
  };
  render() {
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          id="map"
          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {
        	this.props.earthquakes.map((earthquake, i)=>{
	        	return (
	        		<AnyReactComponent 
	        		key={i}
	        		lat={earthquake.geometry.coordinates[1]}
	        		lng={earthquake.geometry.coordinates[0]}
	        		image={'images/earthquake.png'}
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