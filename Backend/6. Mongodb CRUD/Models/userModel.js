import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    username: String,
    email: String,
})

const User = mongoose.model('User', UserSchema);

export default User;