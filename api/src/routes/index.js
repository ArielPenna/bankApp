const { Router } = require("express");

const { Account } = require("../db")

//----------------------------------------------------------------------------//
//---------------------------MODULES-IMPORTS----------------------------------//
//----------------------------------------------------------------------------//
const userPath = require("./path/user")
const addPath = require("./path/add")

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-FUNCIONAL--------------------------------//
//----------------------------------------------------------------------------//
const router = Router();

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-ROUTES-----------------------------------//
//----------------------------------------------------------------------------//

router.use('/user', userPath)
router.use('/add', addPath)


module.exports = router;