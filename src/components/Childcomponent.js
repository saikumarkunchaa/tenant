import React, { Component } from 'react';

class Childcomponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {jsonData} = this.props;
        return (
            <div>
                {
                    Object.keys(jsonData).map((item,index) => (
                        <p>{jsonData[index].title}</p>
                    ))
                }
            </div>
        )
    }
}

export default Childcomponent;
