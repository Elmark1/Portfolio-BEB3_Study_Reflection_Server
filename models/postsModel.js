import mongoose from 'mongoose';

const postSchema = mongoose.schema({
  title: String,
  content: String,
  writer: String,
  createdAt: {
	type: Date,
	default: new Date()
  }
});

const PostsModel = mongoose.model('PostsModel', postSchema);

export default PostsModel; 
