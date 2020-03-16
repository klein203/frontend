import React from 'react'
import { Router, Route, IndexRoute, browserHistor, Link } from 'react-router'

// global config
// import '../config/globalConfig'

import MainPage from '../page'


class PageRouter extends React.Component {
    updateHandle() {
        console.log('router changed ...');
    }

    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' exact component={MainPage} />
            </Router>
        );
    }
}

export default PageRouter;
