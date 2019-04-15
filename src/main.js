import React, { Component } from 'react';
import CreateTenant from './containers/CreateTenant';
import {createNews}   from './actions/actions';
import {connect} from 'react-redux';
class main extends Component {
    handleSubmit = (values) => {
        this.props.createNews(values);
    }
    render() {
        return (
            <div>
                <CreateTenant onSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch) => {
    return {
         createNews: (values) => dispatch(createNews(values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ))
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}
var formData = connect(
    null,
    mapDispatchToProps
  )(main)
  
export default formData;