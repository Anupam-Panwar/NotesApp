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
    }
});

module.exports = mongoose.model('notes', notesSchema);