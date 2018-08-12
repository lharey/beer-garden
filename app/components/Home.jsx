import * as React from 'react';
import Menu from './Menu';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home">
                <Menu />
                <h2>Welcome to my Beer Garden</h2>
            </div>
        );
    }
}

export default Home;