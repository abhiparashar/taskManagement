const express = require('express')
const router = express.Router()

const{CreateTask,GetTasks,GetTask,UpdateTask,Deletetask} = require('../controllers/user')

router.post('/createtask',CreateTask)
router.get('/gettask/:id',GetTask)
router.get('/gettasks',GetTasks)
router.put('/updatetask/:id',UpdateTask)
router.delete('/deletetask/:id',Deletetask)

module.exports = router
