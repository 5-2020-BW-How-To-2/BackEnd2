const express = require("express");

// const Project = require("./posts-model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getAllPosts()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errMessage: "Sorry, an error has occured with retrieving posts",
      });
    });
});

router.post("/", (req, res) => {
  Project.addPosts(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to post new post. " });
    });
});
