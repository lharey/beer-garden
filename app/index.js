import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Brewdog from './components/Brewdog';

import './styles.scss';

class AppWrapper extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/brewdog" component={Brewdog} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    React.createElement(AppWrapper),
    document.getElementById('app_root'),
);