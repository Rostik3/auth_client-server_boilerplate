const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()
const users = require('./routes/users.routes');

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/users', users)

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb connected')).catch((err) => console.log(err))

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`);
})