import React from "react";

export const Spinner = props => {
  let { loading } = props;
  if (loading === true) {
    return (
      <div>
        <div class="loading">...Loading</div>
      </div>
    );
  } else {
    return <div>LAZY loading success</div>;
  }
};
