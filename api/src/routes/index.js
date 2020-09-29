const { Router } = require("express");

//----------------------------------------------------------------------------//
//---------------------------MODULES-IMPORTS----------------------------------//
//----------------------------------------------------------------------------//
const transactionsPath = require("./path/transactions")
const userPath = require("./path/user")
const addPath = require("./path/friend")
const authUserPath = require("./path/auth")
const emailPath = require("./path/email")

//----------------------------------------------------------------------------//
//---------------------------MODULES-IMPORTS----------------------------------//
//-------------------------------API-REST-------------------------------------//
//----------------------------------------------------------------------------//
const apiLocationPath = require("./api/location")

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-FUNCIONAL--------------------------------//
//----------------------------------------------------------------------------//
const router = Router();

//----------------------------------------------------------------------------//
//-----------------------MIDDLEWARES-ROUTES-----------------------------------//
//----------------------------------------------------------------------------//

router.use('/api/user/auth', authUserPath)
router.use('/api/user', userPath)
router.use('/api/friend', addPath)
router.use('/api/transactions', transactionsPath)
router.use('/api/email', emailPath)

//--------API-Rest----------//

router.use('/api/api/location', apiLocationPath)

//-------------------------//

module.exports = router;
