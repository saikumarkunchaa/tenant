import React, { Component } from "react";
import { connect } from "react-redux";
/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";
import TimezonePicker from "react-timezone";
import * as Actions from "../actions/actions";
class CreateTenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      timezone: ""
    };
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleName(e) {
    this.setState({ name: e.target.value });
    //console.log(this.state.name);
  }
  handleTimezone(Timezone) {
    //let zone = Timezone;
    this.setState({ timezone: Timezone });
    console.log(this.state);
  }
  handleFormSubmit = e => {
    alert("form submission");
    e.preventDefault();
    this.props.Tenantdata(this.state);
  };
  /* This life cycle hook gets executed when the component mounts */

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class=" panel-primary">
                <form
                  className="container"
                  method="POST"
                  onSubmit={this.handleFormSubmit}
                >
                  <Input
                    name="text"
                    placeholder="Tenant Name"
                    title="Tenant Name"
                    handleChange={e => this.handleName(e)}
                  />
                  <br />
                  <div class="form-group">
                  <label class="form-label">Timezone:</label><br />
                  <TimezonePicker
                    value={this.state.timezone}
                    onChange={timezone => this.handleTimezone(timezone)}
                    inputProps={{
                      placeholder: "Select Timezone...",
                      name: "timezone",
                      title: "Timezone"
                    }}
                  />
                  </div>
                  <br />
                  <input type="submit" value="submit"  class = "btn btn-primary"/>
                </form>
              </div>
            </div>
            </div>
          </div>
         
    );
  }
}
// export const mapStateToProps = state => {
//   return {
//     UserData: state.FormData
//   };
// };
export const mapDispatchToProps = dispatch => ({
  Tenantdata: data => dispatch(Actions.createTenant(data))
});

CreateTenant = connect(
  null,
  mapDispatchToProps
)(CreateTenant);
export default CreateTenant;
