const { Router } = require("express");


//----------------------------------------------------------------------------//
//---------------------------MODULES-IMPORTS----------------------------------//
//----------------------------------------------------------------------------//
const transactionsPath = require("./path/transactions")
const userPath = require("./path/user")
const addPath = require("./path/add")
const authUserPath = require("./path/auth")
const email = require("./path/email")
//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-FUNCIONAL--------------------------------//
//----------------------------------------------------------------------------//
const router = Router();

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-ROUTES-----------------------------------//
//----------------------------------------------------------------------------//

router.use('/user/auth', authUserPath)
router.use('/user', userPath)
router.use('/add', addPath)
router.use('/transactions', transactionsPath)
router.use('/email', email)

module.exports = router;