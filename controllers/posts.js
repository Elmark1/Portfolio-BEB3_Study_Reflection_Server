import postsModel from '../models/postsModel.js';

export const getPosts = async (req, res) => {
  try {
	const posts = await postsModel.find();

	res.status(200).json(posts);
  } catch(error) {
	res.status(404).json({message: error.message});
  }
}

export const createPost = async (req, res) => {
  try {
	const body = req.body;
	const newPost = new postsModel(body);

	await newPost.save();

	res.status(201).json(newPost);
  } catch(error) {
	res.status(409).json({message: error.message});
  }
}
