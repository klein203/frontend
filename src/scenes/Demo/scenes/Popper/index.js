import React from 'react';
import Popper from './components/popper';


var step = 1;

class PopperPage extends React.Component {
    render() {    
        return (
            <div>
                <Popper step={step} />
            </div>
        );
    }
}

export default PopperPage;
