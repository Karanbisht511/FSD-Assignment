const express=require('express')
const User=require('../Controller/user')
const isAuthenticated=require("../Controller/JWTAuthMiddleware")

const router=express.Router()

const {login,signup,logout,retrieveUserDetails,addUserDetails}=User

router.post("/login",login)
router.post('/signup',signup)
router.get('/logout',isAuthenticated,logout)
router.get('/retrieveUserDetails',isAuthenticated,retrieveUserDetails)
router.post('/addUserDetails',isAuthenticated,addUserDetails)


module.exports=router
