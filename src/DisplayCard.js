import React from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Stars from "./Stars";
import Proptypes from "prop-types";

const AUTH_USER_ID = "85eb742cb7664a3895fac3ea6ad5993b";

function average(ratings) {
  const total = ratings.reduce((acc, { rating }) => {
    acc += rating;
    return acc;
  }, 0);
  const average = total / ratings.length;
  return Math.round(average * 10) / 10;
}

const OuterCard = styled(Card)`
  width: 100%;
  max-width: 525px;
  min-width: 310px;
  height: 250px;
  background: ${props => `url(${props.imgurl})`};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const styles = () => ({
  inner: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    opacity: 0.75,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  innerTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textDecoration: "none",
    color: "black"
  },
  innerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  innerBottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: ".25rem",
    width: "100%"
  },
  deck: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: ".5rem"
  },
  avatar: {
    width: 75,
    height: 75
  },
  avatarButtonWrapper: {
    padding: 0,
    margin: "0.5rem"
  },
  stars: {
    width: "140px",
    margin: "0 .25rem"
  },
  smallText: {
    fontSize: ".75rem"
  },
  info: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  }
});

class DisplayCard extends React.Component {
  render() {
    const { classes, recipe, user, readOnly, dispatch } = this.props;
    const { rating } = recipe.ratings.find(
      rating => rating.uid === AUTH_USER_ID
    ) || { rating: null };
    const averageRating = average(recipe.ratings);
    return (
      <div className={classes.deck}>
        <OuterCard imgurl={recipe.imgURL}>
          <Card className={classes.inner}>
            <div className={classes.innerTop}>
              <IconButton className={classes.avatarButtonWrapper}>
                <Avatar className={classes.avatar} src={user.avatarURL} />
              </IconButton>
              {/* add Link component later instead of anchor */}
              <a href="/#" className={classes.innerTitle}>
                <h2>{recipe.title}</h2>
                <h3>{`By ${user.name}`}</h3>
              </a>
            </div>

            <div className={classes.innerBottom}>
              <div className={classes.stars}>
                {readOnly ? (
                  <Stars rating={averageRating} />
                ) : (
                  <Stars
                    widgetHoverColors="#FFC312"
                    widgetRatedColors="#FFC312"
                    rating={rating !== null ? rating : averageRating}
                    changeRating={() => {}}
                  />
                )}
              </div>
              <div className={classes.info}>
                <p className={classes.smallText}>{`Prep time: ${
                  recipe.prepTime
                } min`}</p>
                <p className={classes.smallText}>{`Cook time: ${
                  recipe.cookTime
                } min`}</p>
              </div>
            </div>
          </Card>
        </OuterCard>
      </div>
    );
  }
}

DisplayCard.propTypes = {
  readOnly: Proptypes.bool,
  classes: Proptypes.object,
  recipe: Proptypes.object,
  user: Proptypes.object,
  dispatch: Proptypes.func
};

// We will later make this a connected component so we can have access to dispatch

export default withStyles(styles)(DisplayCard);
