import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
},{
    timestamps: true
})

const User = mongoose.model('User', UserSchema);

export default User;