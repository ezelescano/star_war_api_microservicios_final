module.exports = async (res, statusCode, data) => {//esta funcion se va a encargar de mostrar el mensaje, sin la necesidad de estar copiando la estructura una y otra vez en cada modulo
    res.status(statusCode).json({
        error: false,
        data,
    });
};