import * as React from 'react';
import template from './Table.template';


class Table extends React.Component {
    constructor(props) {
        super(props);

        this.headings = props.headings;
        this.width = this.props.width ? this.props.width : '100';

        this.state = {
            data: this.props.data,
            images: this.props.images
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: newProps.data,
            images: newProps.images,
        });
    }

    render() {
        this.render = template.bind(this);
        return this.render();
    }
}

export default Table;