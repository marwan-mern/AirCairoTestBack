import usersModel from "../models/usersModel.js"


export const Login = async (req, res) => {
    const { UserName,Pass} = req.query;
    try {
        const User = await usersModel.find({User_Name:UserName,Pass:Pass});
        res.status(200).json(User)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const UserData = async (req, res) => {
    const { UserId} = req.query;
    try {
        const User = await usersModel.find({_id:UserId});
        res.status(200).json(User)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

