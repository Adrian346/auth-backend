const { response } = require("express")

const receiveCode = (req, res = respone) => {

    res.json({
        message: 'token',
    });
}

const receiveNotificacion = (req, res = response) => {

    console.log(req.body);

    res.status(200).json({
        message: 'ok',
    })
}


module.exports = {
    receiveCode,
    receiveNotificacion,
}