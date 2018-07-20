import React, { Component } from 'react';
import FlatList from './flatList.jsx';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat(index) {
    this.setState.selectedFlat({selectedFlat: flats[index]})
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}/>
        <div className='map-container'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
            defaultCenter={this.center()}
            defaultZoom={13}
          >
            <div
              className='marker'
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            ></div>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
