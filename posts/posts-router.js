const express = require("express");
const Posts = require("./posts-model");
const db = require("../database/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("posts")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve posts" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Posts.findById(id)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: "Could not find post with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Posts" });
    });
});

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;

  Posts.findSteps(id)
    .then((steps) => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given post" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.post("/", (req, res) => {
  const postsData = req.body;

  Posts.add(postsData)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new post" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Posts.findById(id)
    .then((post) => {
      if (post) {
        Posts.update(changes, id).then((updatedPost) => {
          res.json(updatedPost);
        });
      } else {
        res.status(404).json({ message: "Could not find post with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update post" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted, message: "successfully deleted post!" });
      } else {
        res.status(404).json({ message: "Could not find post with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete post" });
    });
});

router.post("/:id/steps", (req, res) => {
  const stepData = req.body;
  const { id } = req.params;

  Posts.findById(id)
    .then((step) => {
      if (step) {
        Posts.addStep(stepData, id).then((step) => {
          res.status(201).json(step);
        });
      } else {
        res.status(404).json({ message: "Could not find step with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new step" });
    });
});

module.exports = router;
