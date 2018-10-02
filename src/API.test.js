import {
  _saveRating,
  _fetchRecipe,
  _fetchUser,
  _saveComment,
  resetData
} from "./API";

afterEach(() => resetData());

describe(`API`, () => {
  const uid = "6c826e4a0fa442d085959a6ce657fa55",
    rid = "a6b5f72f9f234cf998c5542378d38f92";

  it(`Saves a rating`, async () => {
    const rating = 5;
    const actual = {
      id: "a6b5f72f9f234cf998c5542378d38f92",
      title: "Orange Marmalade",
      uid: "6c826e4a0fa442d085959a6ce657fa55",
      prepTime: 10,
      cookTime: 60,
      ratings: {
        "6c826e4a0fa442d085959a6ce657fa55": 5,
        b4eb6667cf06483d9e25c6ad4e6c334d: 4
      },
      comments: [],
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Orange_marmalade-3.jpg"
    };
    const recipe = await _saveRating(uid, rid, rating);
    expect(recipe).toEqual(actual);
  });

  it(`can fetch a recipe`, async () => {
    const actual = {
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
    };
    const recipe = await _fetchRecipe(rid);
    expect(recipe).toEqual(actual);
  });

  it(`can fetch a user`, async () => {
    const actual = {
      id: "6c826e4a0fa442d085959a6ce657fa55",
      name: "Paddington",
      avatarURL: "https://avatarfiles.alphacoders.com/126/126546.jpg",
      recipes: {
        a6b5f72f9f234cf998c5542378d38f92: true
      }
    };

    const user = await _fetchUser(uid);
    expect(user).toEqual(actual);
  });

  it(`can save a comment`, async () => {
    await _saveComment(uid, rid, "Hello, world!");
    const recipe = await _fetchRecipe(rid);

    expect(recipe.comments.length).toBe(1);
    expect(recipe.comments[0].message).toBe("Hello, world!");
  });
});
