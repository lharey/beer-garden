import * as React from 'react';

export default function() {
    return (
        <div className={ 'beer-table mt-2 w-' + this.width }>
            <table className="table">
                <thead>
                    <tr key="heading">
                        <th className={this.state.images ? "image" : "d-none"}></th>
                        { this.headings.map((heading) => <th key={ heading } scope="col">{heading}</th> )}
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map((d, index) => {
                        return (
                            <tr key={ d.id }>
                                <td className={this.state.images ? "image" : "d-none"}>
                                    <img
                                        src={this.state.images[d.id]}
                                        style={{width: "30px"}}
                                    />
                                </td>
                                {
                                    this.props.headings.map((heading) => {
                                        const field = heading.toLowerCase();
                                        return (
                                            <td key={ `${heading}_${d.id}` }>
                                                { d[field] }
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                   })
                }
                </tbody>
            </table>
        </div>
    );
}