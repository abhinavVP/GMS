const express = require('express');
const mongoose = require('mongoose');
const Request = require('../models/request');
const Worker = require('../models/worker');
const router = express.Router();

router.get('/tasks/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const wkr = await Worker.findById(id).populate('currentTask');
        const pincode = wkr.currentTask.address;
        res.status(200).json(pincode);
    } catch (error) {
        console.error(error)
        res.status(500).json({error});
    }
})

module.exports = router;