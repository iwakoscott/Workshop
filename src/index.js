import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";
import DisplayCard from "./DisplayCard";
import { _saveRating } from "./API";

const data = {
  user: {
    id: "85eb742cb7664a3895fac3ea6ad5993b",
    name: "Paddington",
    avatarURL: "https://avatarfiles.alphacoders.com/126/126546.jpg",
    recipes: {}
  },
  recipe: {
    id: "06262c58458c4a0aa2a39c4aa5c7d8fd",
    title: "Orange Marmalade",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Orange_marmalade-3.jpg",
    ratings: [
      {
        uid: "85eb742cb7664a3895fac3ea6ad5993b",
        rating: 3
      },
      {
        uid: "a16e804a94b94155a0e8c370b83cc92a",
        rating: 2
      }
    ],
    prepTime: 10,
    cookTime: 60
  }
};

const styles = () => ({
  deck: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: ".5rem"
  }
});

function App({ classes }) {
  return (
    <div className={classes.deck}>
      <DisplayCard {...data} />
    </div>
  );
}

const uid = "6c826e4a0fa442d085959a6ce657fa55",
  rid = "a6b5f72f9f234cf998c5542378d38f92",
  rating = 5;
_saveRating(uid, rid, rating);

const StyledApp = withStyles(styles)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<StyledApp />, rootElement);
