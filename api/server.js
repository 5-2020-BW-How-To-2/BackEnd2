const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
// const postsRouter = require("../posts/posts-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
// server.use("/api/posts", postsRouter);
server.get("/", (req, res) => {
  res
    .status(200)
    .json({ api: "Server is up and running", environment: process.env.DB_ENV });
});
module.exports = server;
