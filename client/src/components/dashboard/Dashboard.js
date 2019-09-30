import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
 onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
   const {user} = this.props.auth;
return (
    <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align grey-text">
            <h4>
              <b>Hey there,</b> {user.name}
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="btn btn-success"
            >
              Logout
            </button>
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
  { logoutUser }
)(Dashboard);