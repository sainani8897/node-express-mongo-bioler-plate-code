const { User } = require('../database/Models')    

exports.index = async function (req, res, next) {

    res.send("At Users Controller");
    // Validate request parameters, queries using express-validator
    
    // var page = req.params.page ? req.params.page : 1;
    // var limit = req.params.limit ? req.params.limit : 10;
    // try {
    //     var users = await User.getUsers({}, page, limit)
    //     return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    // } catch (e) {
    //     return res.status(400).json({ status: 400, message: e.message });
    // }
}


exports.show = async function (req, res, next) {

    res.send("At Users Controller");
    // Validate request parameters, queries using express-validator
    
    // var page = req.params.page ? req.params.page : 1;
    // var limit = req.params.limit ? req.params.limit : 10;
    // try {
    //     var users = await User.getUsers({}, page, limit)
    //     return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    // } catch (e) {
    //     return res.status(400).json({ status: 400, message: e.message });
    // }
}