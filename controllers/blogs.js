const Blog = require("../models/blog");
const blogsRouter = require("express").Router();
require("express-async-errors");

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  if (!body.title || !body.url) {
    return response.status(400).json({ error: "Title and URL are required" }); // Mensaje específico
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  try {
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const blog = {
    title : body.title,
    author : body.author,
    url : body.url,
    likes : body.likes
  };

  try {
    const result =  await Blog.findByIdAndUpdate(request.params.id, blog, {new: true, runValidators: true})

    if (result) {
      response.status(204).end();
    } else {
      response.status(404).json({ error: "Blog not found" }); 
    }
  } catch {
    next(error)
  }
})

module.exports = blogsRouter;
