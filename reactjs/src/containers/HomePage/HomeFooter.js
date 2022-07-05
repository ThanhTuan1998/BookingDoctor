import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
// Import css files

class HomeFooter extends Component {
  render() {
    return (
        <div className="home-footer">
            <p>&copy;Tuan Hoc Code IT <a href="#">&#8594;Click me&#8592; More information</a></p>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
