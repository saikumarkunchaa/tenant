import React, { Component } from "react";
import { Spinner } from "../components/Spinner";
import { lazyLoading } from "../actions/actions";
import {connect} from "react-redux";
import Childcomponent from "../components/Childcomponent";
export  class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loading: true
      
    };
    console.log('constructor');
   // this.props.lazyLoadingProp = this.props.lazyLoadingProp.bind(this)
  }
  componentDidMount() {
   // const { lazyLoadingProp } = this.props;
    //console.log(this.props);
    console.log("didmount");
    this.props.lazyLoadingProp();
  }
  render() {
    const sai = this.props.data;
    return (
      <div>
        <Spinner loading={this.props.loading} />
        <Childcomponent jsonData = {this.props.data.res} />
       
      </div>
    );
  }
}
Home.defaultProps = {
  loading: true,
  data: {res: ''}
}
export const mapDispatchToProps = dispatch => {
  return {
    lazyLoadingProp: () => dispatch(lazyLoading())
  };
};
export const mapStateToProps = (state)=> {
  // const Info = state.reducer.data;
  // const loading = state.reducer.loading;
  // this.setState({ loading: loading, data: Info });
  console.log(state.reducer.data);
  return {
          loading: state.reducer.loading, 
          data: state.reducer.data 
        }
}
var HomeComp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
  
export default HomeComp;