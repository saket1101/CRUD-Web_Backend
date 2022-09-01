
const profileModel = require("../Models/profileModels")
const { sendMail } = require("../Utility/nodemailer")


// To Register the form go on Post route and user /profile
module.exports.createPage = async function createPage(req, res) {
    try {
        const data = req.body
        const profile = await profileModel.create(data)
        sendMail("Register", profile)
        res.json({
            msg: "user created",
            users: profile
        })
    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}
// To get all List of Profile
module.exports.allPage = async function allPage(req, res) {
    try {
        let profile = await profileModel.find()
        if (profile) {
            res.json({
                AllListsAre: profile
            })
        } else if (!profile) {
            res.json({
                msg: "No List Found"
            })
        }
    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}
// To update all data
module.exports.updatePage = async function updatePage(req, res) {
    try {
        const { email } = req.body
        const profile = await profileModel.findOne({ email: email })
        const listToBeUpdated = req.body
        if (profile) {
            let keys = []
            for (let key in listToBeUpdated) {
                keys.push(key)
            }
            for (let i = 0; i < keys.length; i++) {
                profile[keys[i]] = listToBeUpdated[keys[i]]

            }
            const updatedProfile = await profile.save()
            res.json({
                msg: "List updated",
                List: profile
            })
        } else {
            res.json({
                msg: "Profile not found"
            })
        }
    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}
// To Delete Data 
module.exports.deletePage = async function deletePage(req, res) {
    try {
        const { email } = req.body.email
        const profile = await profileModel.findOneAndDelete({ Email: email })
        if (!profile) {
            res.json({
                msg: "User Profile not found"
            })
        } else {
            res.json({
                msg: "User Profile deleted"
            })
        }
    } catch (err) {
        res.json({
            msg: err.message
        })
    }

}

module.exports.homePage = function homePage(req,res){
    res.send("Hiii you are on the home page")
}