import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
 

render() {
   const {user} = this.props.auth;
return (
    <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align grey-text">
            <h4>
              <b>Hey there,</b> {user.name}
            </h4>
            
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Dashboard);