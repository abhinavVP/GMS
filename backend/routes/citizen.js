const express = require('express');
const Request = require('../models/request');
const Worker = require('../models/worker');
const Citizen = require('../models/citizen');
const router = express.Router();



router.get('/allreq/:uid', async (req, res)=>{
    try {
        const {uid} = req.params;
        const user = await Citizen.findById(uid).populate('requests');
        const allRequests = user.requests;
        res.status(200).json(allRequests);
    } catch (err) {
        console.log(err)
        res.status(500).json({err});
    }
});

router.post('/newreq/:userID', async (req,res)=>{
    try {
        const {userID} = req.params;
        const {cartCount} = req.body;
        const user = await Citizen.findById(userID);
        const workers = await Worker.find();
        let length = workers.length;
        let rn = Math.floor((Math.random() * length));
        const driver = workers[rn];
        const newReq = new Request({
            citizen : user._id,
            address : user.address,
            assignedDriver : driver._id,
            completionStatus : 'pending',
            quantity : cartCount,
            
        });
        await newReq.save();
        const newid = newReq._id;
        await Worker.findByIdAndUpdate(driver._id, { currentTask : newid });
        await Citizen.findByIdAndUpdate(user._id, {requests : newid});
        res.status(200).json(newReq);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/latestreq/:uid', async (req, res)=>{
    try {
        const { uid } = req.params;
        const user = await Citizen.findById(uid);
        const rid = user.requests;
        const latestreq = await Request.findById(rid).populate('assignedDriver');
        const driverName = latestreq.assignedDriver.name;
        res.status(200).json({latestreq, driverName});
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});

module.exports = router;