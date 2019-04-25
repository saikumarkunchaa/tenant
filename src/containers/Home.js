import React, { Component } from "react";
import { Spinner } from "../components/Spinner";
import { lazyLoading } from "../actions/actions";
import {connect} from "react-redux";
export  class Home extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      data: "",
      loading: true
    };
   // this.props.lazyLoadingProp = this.props.lazyLoadingProp.bind(this)
  }
  componentDidMount() {
   // const { lazyLoadingProp } = this.props;
    console.log(this.props);
    console.log("didmount");
    this.props.lazyLoadingProp();
  }
  render() {
    return (
      <div>
        <Spinner loading={this.state.loading} />
      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    lazyLoadingProp: () => dispatch(lazyLoading())
  };
};
export const mapStateToProps = (...state)=> {
  console.log('state to props'+JSON.stringify(state));
}
var HomeComp = connect(
  mapStateToProps,
    mapDispatchToProps
  )(Home)
  
export default HomeComp;