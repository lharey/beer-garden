import * as React from 'react';
import APIClient from '../lib/APIClient';
import Menu from './Menu';
import Table from './Table/Table';

class Brewdog extends React.Component {
    constructor(props) {
        super(props);

        this.api = new APIClient('https://api.punkapi.com/v2');

        this.headings = [
            'Name','Description','ABV'
        ];

        this.state = {
            beers: [],
            images: {},
        };
    }
    /**
     * Load beer data when the component is initialized
     */
    componentDidMount() {
        this.getBeer();
    }

    render () {
        return (
            <div className="brewdog">
                <div>
                    <Menu activeMenu="brewdog" />
                </div>
                <div className="container-fluid">
                    <h2>Brewdog Garden</h2>
                    <Table
                        data={this.state.beers}
                        headings={this.headings}
                        images={this.state.images}
                    />
                </div>
            </div>
        );
    }

    getBeer = async () => {
        try {
            const response = await this.api.get('/beers');
            this.setState({ beer: response.data });
            console.log('got beer', this.state.beer);
            const images = {};
            const beers = response.data.map((data) => {
                images[data.id] = data.image_url;
                return {
                    id: data.id,
                    name: data.name,
                    description: data.tagline,
                    abv: data.abv,
                };
            });

            this.setState({
                beers,
                images
            });

            console.log('state', this.state);
        }
        catch (error) { this.handleError(error); }
    }
}

export default Brewdog;