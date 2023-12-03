const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const workerRouter = require('./routes/worker');
const citizenRouter = require('./routes/citizen');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/citizen', citizenRouter);
app.use('/worker', workerRouter);


const uri = "mongodb+srv://garbage:garbage@gms.qxawdmv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>{
    console.log('connected');
})


app.listen(PORT, ()=>{
    console.log("server running on", PORT);
});


