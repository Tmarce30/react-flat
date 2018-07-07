import React, { Component } from 'react';
import FlatList from './flatList.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <div className='flat-list'>
                    <FlatList />
                </div>
                <div className='map-container'>
                </div>
            </div>
        );
    }
}

export default App;
