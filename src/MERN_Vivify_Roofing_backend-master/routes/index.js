const express = require("express");
const router = express.Router();

router.use(express.json());

router.use("/", require("./authRoutes"));
router.use("/jobs", require("./jobRoutes"));
// These need to be auth-protected
router.use('/users', require('./userRoutes'));

module.exports = router;
