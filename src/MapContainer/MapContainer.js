import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image }) => <img alt="earthquake icon" className="mapPin" src={image}></img>;

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
      <div style={{ height: '70vh', width: '100%'}}>
        <GoogleMapReact
          id="map"
          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.earthquakes.map((earthquake, i)=>{
        	return <AnyReactComponent 
        		key={i}
        		lat={earthquake.geometry.coordinates[0]}
        		lng={earthquake.geometry.coordinates[1]}
        		image={'images/earthquake.png'}
        	/>
        })}
        </GoogleMapReact>
      </div>
    );
  }
}