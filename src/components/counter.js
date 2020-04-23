import React from 'react';
import PropTypes from 'prop-types';


class Counter extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncreaseClick: PropTypes.func.isRequired,
        onDecreaseClick: PropTypes.func.isRequired
    }

    render() {
        const { value, onIncreaseClick, onDecreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span><br/>
                <button onClick={() => onIncreaseClick(5)}> +5 </button>
                <button onClick={() => onIncreaseClick(1)}> +1 </button>
                <button onClick={() => onDecreaseClick(1)}> -1 </button>
                <button onClick={() => onDecreaseClick(5)}> -5 </button>
            </div>
        );
    };
}

export default Counter;
