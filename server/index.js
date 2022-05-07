
require('dotenv').config()
const express = require('express');
const userRouter = require('./routes/phone.route')
const cors = require('cors')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))