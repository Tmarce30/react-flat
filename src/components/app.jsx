import React, { Component } from 'react';
import FlatList from './flatList.jsx';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className='map-container'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
