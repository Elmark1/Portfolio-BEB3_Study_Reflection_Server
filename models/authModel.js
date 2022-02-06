import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
  id: String,
  password: String
});

const AuthModel = mongoose.model('AuthModel', authSchema);

export default AuthModel;
