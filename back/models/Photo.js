const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    userId: { type: String, required: true },
    label: { type: String, required: true },
    photoUrl: { type: String, required: true }
});

module.exports = mongoose.model('Photo', photoSchema);