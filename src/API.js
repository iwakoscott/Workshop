import uuidv4 from "uuid/v4";

function getID() {
  return uuidv4().replace(/\-/g, "");
}

function getRandomTime(upperbound) {
  return Math.floor(Math.random() * upperbound);
}

const initialRecipes = {
  a6b5f72f9f234cf998c5542378d38f92: {
    id: "a6b5f72f9f234cf998c5542378d38f92",
    title: "Orange Marmalade",
    uid: "6c826e4a0fa442d085959a6ce657fa55",
    prepTime: 10,
    cookTime: 60,
    ratings: {
      "6c826e4a0fa442d085959a6ce657fa55": 4,
      b4eb6667cf06483d9e25c6ad4e6c334d: 4
    },
    comments: [],
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Orange_marmalade-3.jpg"
  },
  "096d073b18c6422b8765289ce4e13863": {
    id: "096d073b18c6422b8765289ce4e13863",
    title: "Strawberry Jam",
    uid: "b4eb6667cf06483d9e25c6ad4e6c334d",
    prepTime: 5,
    cookTime: 45,
    ratings: {
      b4eb6667cf06483d9e25c6ad4e6c334d: 5,
      "6c826e4a0fa442d085959a6ce657fa55": 5
    },
    comments: [],
    imgURL:
      "https://www.recipethis.com/wp-content/uploads/Instant-Pot-Strawberry-Jam.jpg.webp"
  }
};

const initialUsers = {
  "6c826e4a0fa442d085959a6ce657fa55": {
    id: "6c826e4a0fa442d085959a6ce657fa55",
    name: "Paddington",
    avatarURL: "https://avatarfiles.alphacoders.com/126/126546.jpg",
    recipes: {
      a6b5f72f9f234cf998c5542378d38f92: true
    }
  },
  b4eb6667cf06483d9e25c6ad4e6c334d: {
    id: "b4eb6667cf06483d9e25c6ad4e6c334d",
    name: "Keiko",
    avatarURL: "http://keikoiwako.com/static/media/headshot.7c9a9c2f.jpg",
    recipes: {
      "096d073b18c6422b8765289ce4e13863": true
    }
  }
};

let recipes = initialRecipes;
let users = initialUsers;

// ============== READ ==============

export function _fetchRecipe(id = null) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (id === null) {
        // if no id is passed we return all recipes
        return resolve(recipes);
      } else {
        // if id is found return recipe else throw error
        if (id in recipes) {
          return resolve(recipes[id]);
        } else {
          return reject(new Error(`Error: RECIPE NOT FOUND.`));
        }
      }
    }, getRandomTime(1000))
  );
}

export function _fetchUser(id = null) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (id in users) {
        return resolve(users[id]);
      } else {
        return reject(new Error(`Error: USER NOT FOUND.`));
      }
    }, getRandomTime(1000))
  );
}

// ============== UPDATE ==============

export function _saveRating(uid, rid, rating) {
  return new Promise(resolve => {
    const recipe = recipes[rid];
    recipes = {
      ...recipes,
      [rid]: {
        ...recipe,
        ratings: {
          ...recipe["ratings"],
          [uid]: rating
        }
      }
    };
    setTimeout(() => resolve(recipes[rid]), getRandomTime(1000));
  });
}

export function _saveComment(uid, rid, message) {
  const comment = {
    id: getID(),
    message,
    timestamp: Date.now(),
    uid
  };

  return new Promise(resolve => {
    const recipe = recipes[rid];
    recipes = {
      ...recipes,
      [rid]: {
        ...recipe,
        comments: recipe.comments.concat([comment])
      }
    };
    setTimeout(() => resolve(comment), getRandomTime(1000));
  });
}

// ============== TESTING PURPOSES ==============
export function resetData() {
  recipes = initialRecipes;
  users = initialUsers;
}
