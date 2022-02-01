const express = require('express')
require('dotenv').config()
const cors = require('cors')
const path = require('path')
const config = require('./config')
// const { PORT } = config;
const PORT = process.env.PORT || 5000
const favicon = require('serve-favicon')

// routes
const employeesRoute = require('./routes/employees')

const app = express()

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')
/* const { MONGO_URI } = config;
const uri = MONGO_URI; */
const uri = process.env.MONGO_URI
const localDbUrl = process.env.DATABASE_URL_DEV
// Connect to Mongo
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'DB connection error:'))
    db.once('open', function() { console.log("DB Connection Successful!"); });


// Use Routes
app.use('/api/employees', employeesRoute)


// Serve the static if in production
if ( process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build/'))
    // any other request than '/api/' => load 'index.html'
    app.get('*', (_, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})

}

app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})