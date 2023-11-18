const express = require('express')
const router = express.Router()
const {
    getAllUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/controller')

// API 
// GET ALL USERS
router.get('/', getAllUser)

// CREATE NEW USER
router.post('/', createUser)

// GET SINGLE USER
router.get('/:id', getSingleUser)

// UPDATE USER
router.patch('/:id', updateUser)

//DELETE USER
router.delete('/:id', deleteUser)

module.exports = router