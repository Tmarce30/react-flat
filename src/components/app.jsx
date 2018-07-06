import React, { Component } from 'react';
import Flat from './flat';

class App extends Component {
    render() {
        return (
            <div>
                <div className='flat-list'>
                    <Flat />
                </div>
                <div className='map-container'>
                </div>
            </div>
        );
    }
}

export default App;
