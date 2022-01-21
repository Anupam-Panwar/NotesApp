const  mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('notes', notesSchema);