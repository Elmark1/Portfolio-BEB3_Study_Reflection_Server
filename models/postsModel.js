import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  writer: String,
  createdAt: {
	type: Date,
	default: new Date()
  }
});

const Posts = mongoose.model('Posts', postSchema);

export default Posts; 
