const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')

const app = express()
connectDB()

app.use(cors({origin:true, credentials:true}));

app.use(express.json({extended:false}));

const chat = require('./routers/api/chat')
app.use('/api/chat', chat)

const port = 8000;
app.listen(port, () => {
    console.log("server listening on port 8000")
})