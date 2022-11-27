const { Router, application } = require("express");
const router = Router();

router.use(require("./categories.route"));
router.use(require("./users.route"));
router.use(require("./comments.route"));
router.use(require("./news.route"));

module.exports = router;
