const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')

const allUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('_id firstNmae secondName');;

    if (users) {
        // const modifiedUsers = users.map(user => {
        //     const { password, ...rest } = user.toObject();
        //     return rest;
        // });
        res.send(users);
    } else {
        res.json({ message: 'no users'})
    }
})

const oneUser = asyncHandler(async (req, res) => {
    const { firstNmae, secondName } = req.body

    const user = await User.findOne({ firstNmae, secondName});

    if (user) {
        res.json({ name: user.firstNmae });
    } else {
        res.json({ message: 'there is no user with this name'})
    }
})

module.exports = { oneUser, allUsers }