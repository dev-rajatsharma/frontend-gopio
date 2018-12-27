import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MainComponent from './project/components/main/main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

let MainComponentWithRouter = withRouter(MainComponent);

ReactDOM.render(
    <Router>
        <MainComponentWithRouter />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
