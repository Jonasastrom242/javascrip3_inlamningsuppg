const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {  type: String, required: true},
    desc:  { type: String, required: true},
    time: { type: Number, required: true},
    userId: { type: String} 
    
}, { timestamps: true });

module.exports = mongoose.model('Events', productSchema); //skapar en collection i vår db