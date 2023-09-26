const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: __dirname+'/../.env'})

const CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports = async() => {
    try{
        await mongoose.connect( CONNECTION_STRING, {
            useNewUrlParser: true
        });
        console.log('database connected :)');
        
    } catch (err){
        console.log(err);
        process.exit(1);
    }
};