const saveRating = require("./API");

describe(`API`, () => {
  it(`Saves a rating`, async () => {
    const uid = "6c826e4a0fa442d085959a6ce657fa55",
      rid = "a6b5f72f9f234cf998c5542378d38f92",
      rating = 5;

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
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Orange_marmalade-3.jpg"
    };
    const recipe = await saveRating(uid, rid, rating);
    expect(recipe).toBe(actual);
  });
});
