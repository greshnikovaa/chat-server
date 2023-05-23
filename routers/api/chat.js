const express= require('express')
const router = express.Router()

const Chat = require('../../models/chat')

router.get('/', (req,res)=>{
    Chat.find()
        .then((chat)=>{
            res.json(chat)
        })
        .catch((err)=>{
            res.status(404).json({mess:'сообщения не нaйдены'})
        })
})

router.post('/', (req,res)=>{
    console.log(req.body)
    Chat.create({name:req.body.name, message:req.body.input})
        .then((chat)=>{
            res.json(chat)
        })
        .catch((err)=>{
            res.status(400).json({mes:'сообщение не отправленно'})
        })
})

router.delete('/:id', (req,res)=>{
    Chat.findByIdAndDelete(req.params.id)
        .then((chat)=>{
            res.json(chat)
        })
        .catch((err)=>{
            res.status(400).json({mes:'сообщение не удалено'})
        })
})


module.exports = router