import express from "express";
import homepageController from "../controllers/homepageController";

let router = express.Router();

let initAllWebRoutes = (app) => {
    router.get("/", homepageController.getHomePage);
    router.post("/send-notification", homepageController.handlePushTeleNotification);
    router.get("/telegram", homepageController.getTelegramPage);
    router.get("/send-animation",homepageController.sendAnimation);
    return app.use("/", router);
};

module.exports = initAllWebRoutes;
