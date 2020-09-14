
//-------------------------------------
//      FUNCION AUTENTICAR USUARIO    |
//-------------------------------------
module.exports = estaAutenticado = (req, res, next) => {
    if (req.isAuthenticated())
        next();
    else 
        res.status(401).send("el usuario no esta autenticado");
}