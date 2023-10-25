module.exports = (fn) => {// esta funcion recibe por parametro la funcion original
    return function(req, res, next) { //aca retorna dicha funcion
        fn(req, res).catch((err) => {//si esta produce un error lo agarra el catch y lo dirige al err pero nunca corta la ejecucion-
            next(err); //aunque express tenga un manejador de errores solo finciona con fallas sicronicas, de esta forma puede manejar todos
        });
    };
};

// version reducida

// (fn)=> (req, res, next)=> fn().catch((err) => next(err));