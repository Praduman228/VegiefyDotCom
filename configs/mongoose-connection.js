const mongoose = require('mongoose')

const dbconnect= mongoose.connect(process.env.MONGODB_URI).then(function(connection) {
    console.log('Connected to Database')
}).catch(function(err){
    console.log('Could not connect to the database. Exiting now...')
    
})

module.exports = dbconnect;

