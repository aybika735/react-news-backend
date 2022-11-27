const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.post("/users", usersController.registerUser);
router.post("/login", usersController.login);
router.delete("/users/:id", usersController.deleteUserById);

router.get("/users", usersController.getUsers);

module.exports = router;
