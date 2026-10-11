const userModel = require("../models/user.models");
const blackListModel = require("../models/blacklist.models");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "token not provided"
        });
    }

    try {
        const isTokenBlackListed = await blackListModel.findOne({ token });

        if (isTokenBlackListed) {
            return res.status(401).json({
                message: "token is blacklisted"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.jwt_secret
        );

        req.user = decoded;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "invalid token"
        });
    }
}

module.exports = authUser;