import React, { Component } from 'react';
import CreateTenant from './containers/CreateTenant';
import {createNews}   from './actions/actions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
class main extends Component {
    handleSubmit = (values) => {
        this.props.createNews(values);
    }
    render() {
        // console.log(this.props.response);
       const {response} = this.props;
        if(response.status == 200) {
            return <Redirect to = '/' />
        }
        return (
            <div>
                <CreateTenant onSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}
main.defaultProps = {
    response: {status: 201},
}
const mapDispatchToProps =(dispatch) => {
    return {
         createNews: (values) => dispatch(createNews(values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ))
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}
const mapStateToProps = (state) => {
    return { 
        response: state.reducer.Newsdata.apidata
    }
}
var formData = connect(
    mapStateToProps,
    mapDispatchToProps
  )(main)
  
export default formData;