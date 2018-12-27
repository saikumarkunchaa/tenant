import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <div>
      <Link to={`${props.url}`} activeClassName="active" url="">
        <button>{props.title}</button>
      </Link>
    </div>
  );
};
// const mapDispatchToProps = {
//   getNews: getNews
// };
// Button = connect(
//   null,
//   mapDispatchToProps
// )(Button);
export default Button;
