import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// global config
// import '../config/globalConfig'

import HomePage from './component/index';


class AppRouter extends React.Component {
    updateHandle() {
        console.log('router changed ...');
    }

    render() {
        return (
            <BrowserRouter onUpdate={this.updateHandle.bind(this)}>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
