const { response } = require("express")

const receiveNotificacion = (req, res = respone) => {

    console.log(req.body);

    res.json({
        msg: 'ok',
    });
}

const response200 = (req, res = response) => {
    res.status(200).json({
        message: 'ok',
    })
}


module.exports = {
    receiveNotificacion,
    response200,
}