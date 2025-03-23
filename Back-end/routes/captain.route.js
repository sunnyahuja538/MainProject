const express=require('express');
const { ExpressValidator } = require('express-validator');
const router=express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captain.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1 character'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Invalid')
],captainController.registerCaptain)


module.exports=router;