import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    User_Name: String,
    Pass: String,
    role:String,
    Full_Name:String
})

const users = mongoose.model('users', UserSchema);

export default users;