import { PostModel } from "../model/PostModel.js";

export const getPost = async (req, res) => {
  try {
    const listPost = await PostModel.find();
    console.log(listPost);
    res.status(200).json(listPost);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    post.save();
    res.status(200).json(post);
    res.send("Sucess");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
