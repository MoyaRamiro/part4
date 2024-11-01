const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];

  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "SUPER BLOG",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 20,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "EPIC BLOG",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 15,
      __v: 0,
    },
  ];

  const emptyList = [];

  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(emptyList);
    assert.strictEqual(result, 0);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(biggerList);
    assert.strictEqual(result, 40);
  });
});

describe("favorite blogs", () => {
  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "SUPER BLOG",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 20,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "EPIC BLOG",
      author: "Edsger W. Dijkstra",
      url: "",
      likes: 15,
      __v: 0,
    },
  ];

  test("return the correct favorite blog", () => {
    const favoriteBlog = listHelper.favoriteBlog(biggerList);
    console.log(favoriteBlog)
    assert.deepStrictEqual(favoriteBlog, biggerList[1]);
  });
});
