

const mongoose = require('mongoose')

const commschema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, require: true }
}, { timestamps: true 
})

const commentModel = mongoose.model('commentModel', commschema)

module.exports = commentModel;