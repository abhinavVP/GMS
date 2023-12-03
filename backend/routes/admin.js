const express = require('express');
const mongoose = require('mongoose');
const Request = require('../models/request');
const Worker = require('../models/worker');
const Citizen = require('../models/worker');
const router = express.Router();
const Admin = require('../models/admin');



router.get('/requests/all',async (req,res)=>{
    try {
        const allRequests = await Request.find({}).populate('citizen').populate('assignedDriver');
        res.status(200).json(allRequests);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/requests/new', async (req, res)=>{
    try {
        const pendingReq = await Request.find({completionStatus : 'pending'}).populate('assignedDriver');
        const reslt = {}
        let i=0;
        pendingReq.forEach(reqt => {
            if(reslt[reqt.address]) reslt[reqt.address].quantity=reslt[reqt.address].quantity+reqt.quantity;
            else{
                reslt[reqt.address] = {
                    id : reqt._id,
                    quantity : reqt.quantity,
                    driverName : reqt.assignedDriver.name
                }
            }
        });
        res.status(200).json(reslt);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/requests/completed', async (req, res)=>{
    try {
        const completedReq = await Request.find({completionStatus : 'completed'}).populate('citizen').populate('assignedDriver');
        res.status(200).json({completedReq});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/allworkers', async (req, res)=>{
    try {
        const allWorkers = await Worker.find({});
        res.status(200).json(allWorkers);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/allcitizens', async (req, res)=>{
    try {
        const allCitizens = await Citizen.find({});
        res.status(200).json(allCitizens);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/upload/:rid/:did', async(req, res)=>{
    const {did, tid} = req.params;
    const task = await Request.findById(tid);
    const worker = await Worker.findById(did);
    worker.currentTask = task.address;
    task.assignedDriver = did;
    task.completionStatus = 'sent-to-driver';
    res.status(200).json({task : task.address, worker : worker.name});
})

module.exports = router;


