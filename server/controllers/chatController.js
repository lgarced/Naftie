const { User } = require("../models")


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users =  await User.find({ _id: { $ne:req.params.id }}).select([
            "_id",
            "firstName",
            "lastName",
            "email",
        ]);
        return res.json(users)
    } catch (error) {
        console.log("Get all users error --- ", error)
    }
};