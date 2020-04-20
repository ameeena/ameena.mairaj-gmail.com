import { Bar } from "@vx/shape";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Books from "../books/Books";

import * as bookActions from "../../actions/booksActions";
// import Recipes from "./Recipes";
import { Typography, Button } from "@material-ui/core";

class Dashboard extends React.Component {
  componentDidMount() {
    const { bindActions } = this.props;
    bindActions.getAllBooks();
  }

  render() {
    return <Books books={this.props.books} />;
  }
}

Dashboard.propTypes = {
  books: PropTypes.array.isRequired,
  bindActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log(state.books);
  return {
    books: state.books,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    bindActions: bindActionCreators(bookActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
