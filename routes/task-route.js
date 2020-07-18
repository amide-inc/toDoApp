const router = require('express').Router();
const Task = require('../models/task')

router.get('/', (req, res) => {
    Task.find()
        .exec()
        .then(result => {
            res.json({success : true, result: result})
        }).catch(err => {
            res.json({success: false, error: err})
        })
});

router.post('/', (req, res) => {
    const task =   Task({
        title: req.body.title,
        description : req.body.description 
    })
    task.save()
        .then(result => {
            res.json({success: true, message:"task has been added"})
        })
        .catch(err => {
            res.json({success: false, error: err}) 
        })
})

router.patch('/:id', (req, res) => { 
   const id =  req.params.id; 
   Task.updateOne({_id: id}, {$set: req.body})
       .exec()
       .then(result => {
           res.json({success: true, message: 'task updated'})
       })
       .catch(err => {
           res.json({success: false, error: err})
       })
})

router.delete('/:id', (req, res) => {
    const id =  req.params.id; 
    Task.deleteOne({_id: id})
       .exec()
       .then(result => {
           res.json({success: true, message: 'task removed'})
       })
       .catch(err => {
           res.json({success: false, error: err})
       })
})



module.exports = router;