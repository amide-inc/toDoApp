const express = require('express');
const taskRoute = require('./routes/task-route');
const app = express();
const port = process.port || 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/toDoApp-data',
{ useUnifiedTopology: true,  useNewUrlParser: true  },
 (err) => {
    if(err) {
        console.log("connection lost" +  err);
    }else{
        console.log("DB is connected");
    }
})
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api/task', taskRoute);

app.listen(port, () => {
    console.log("server is connected at port" + port)
})