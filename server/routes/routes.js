const { getAllUsers } = require("../controllers/chatController");

const router = require("express").Router();

router.get("/allusers/:id", getAllUsers)

module.exports = router;