import * as React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light pt-0 pb-0 mb-2">
                <a className="navbar-brand" href="/">
                    <img src="/images/if_yumminky-skycons-mix-09_2151699.png" width="57px" height="57px" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu_navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu_navbar">
                    <div className="navbar-nav mr-auto">
                        <Link to="/brewdog"
                            className={'nav-item nav-link' + (this.props.activeMenu === 'brewdog' ? ' active' : '')}>
                            Brewdog
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;