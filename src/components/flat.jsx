import React, { Component } from 'react';

class Flat extends Component {
    render() {
        const infos = this.props.infos
        const styles = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${infos.imageUrl})`
        };
        return (
            <div className="card" style={styles}>
                <div className="card-category">{infos.price} {infos.priceCurrency}</div>
                    <div className="card-description">
                        <h2>{infos.name}</h2>
                    </div>
                <a className="card-link" href="#"></a>
            </div>
        )
    }
}

export default Flat;
