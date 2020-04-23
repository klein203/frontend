import React from 'react';
import PropTypes from 'prop-types';


class Weather extends React.Component {
    static propTypes = {
        onFetchClick: PropTypes.func.isRequired
    }

    render() {
        const { weather, state, onFetchClick } = this.props
        return (
            <div>
                {state === "success" ? <p>City: {weather.name}<br/>Coord: lon_{weather.coord.lon} lat_{weather.coord.lat}</p> : ''}
                <button onClick={() => onFetchClick('shanghai')}>Fetch weather of Shanghai</button>
            </div>
        )
    }
}

export default Weather;
