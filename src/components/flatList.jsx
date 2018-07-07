import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
    render() {
        return(
            <div className="flat-list">
                {this.props.flats.map(flat => <Flat key={flat.lat} infos={flat} />)}
            </div>
        );
    }
}

export default FlatList;
