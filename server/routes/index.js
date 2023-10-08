const express = require("express");

const rootRouter = express.Router();
const router = express.Router();

const setFakeAdminSession = require("../security/fake_session");

rootRouter.use("/api", router);

router.route("/").get((req, res, next) => {
    res.send("Hello world! Session id is: " + req.session.userId);
});

router.use("/product", require("./product"));

router.use("/user", require("./user"));

router.use("/cart", require("./cart"));

router.route("/fake").get((req, res, next) => {
    setFakeAdminSession(req, res);
});

module.exports = rootRouter;

// router.route("/").get(indexController.dashboard);
