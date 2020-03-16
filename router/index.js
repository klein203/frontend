import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import PageRouter from './pageRouter'


ReactDOM.render(
    <PageRouter history={ReactRouter} />,
    document.getElementById('root')
)
