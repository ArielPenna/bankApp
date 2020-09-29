// randomize an alphanumeric code
module.exports = function alphanumericCodeGen(len) {
    if(!Number(len)) return 'Defina un numero'
    const characters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ1234567890";
    let code = '' // genero un codigo VVV
    for (i=0; i<len; i++) code += characters.charAt(Math.floor(Math.random() * characters.length));
    return code;
}
