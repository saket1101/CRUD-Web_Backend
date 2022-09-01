const express = require("express")
const profileRouter = express.Router()
const { createPage, allPage, updatePage, deletePage,homePage } = require("../Controller/profileController")

profileRouter.route("/")
.get(homePage)

profileRouter.route("/profile")
    .get(allPage)
    .post(createPage)
    .patch(updatePage)
    .delete(deletePage)

module.exports = profileRouter