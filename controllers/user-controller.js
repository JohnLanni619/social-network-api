const { Thought, User } = require('../models');

const userController = {
// /api/users

    // GET all users
    getAllUser(req, res) {

    },

    // GET a single user by its _id and populated thought and friend data
    getUserById({ params }, res) {

    },

    // POST a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // PUT to update a user by its _id
    updateUser({ params, body }, res) {

    },

    // DELETE to remove a user by its _id
    deleteUser({ params }, res) {

    },
// /api/users/:userId/friends/:friendId

    // POST to add a new friend to a user's friend list
    addFriend({ params, body }, res) {

    },

    // DELETE to remove a friend from a user's friend list
    deleteFriend({ params }, res) {

    }
};

module.exports = userController;