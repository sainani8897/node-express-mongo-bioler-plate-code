const validator = require('../helpers/validate');
const {ValidationException} = require("../exceptions")

exports.signup = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "name": "required|string",
        "password": "required|string|min:6|confirmed",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
           throw new ValidationException("Validation Failed",err)
        } else {
            next();
        }
    });
}

exports.login = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "password": "required",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
           throw new ValidationException("Validation Failed",err)
        } else {
            next();
        }
    });
}

