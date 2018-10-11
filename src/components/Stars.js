import React from "react";
import Ratings from "react-ratings-declarative";
import Proptypes from "prop-types";

function Stars(props) {
  return typeof changeRating === "function" ? (
    <Ratings {...props} widgetDimensions="15px" widgetSpacings="1px">
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  ) : (
    <Ratings {...props} widgetDimensions="15px" widgetSpacings="1px">
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
}

Stars.propTypes = {
  rating: Proptypes.number.isRequired,
  changeRating: Proptypes.func
};

export default Stars;
