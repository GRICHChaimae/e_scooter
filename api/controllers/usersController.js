const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')

const allUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    if (users) {
        const modifiedUsers = users.map(user => {
            const { password, ...rest } = user.toObject();
            return rest;
        });
        res.json({ message: 'get users succefully', users: modifiedUsers});
    } else {
        res.json({ message: 'no users'})
    }
})

module.exports = { allUsers }