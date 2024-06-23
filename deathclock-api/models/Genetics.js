// models/Genetics.js
const mongoose = require('mongoose');

const GeneticsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    geneticDisorders: String,
    familyHistory: String,
});

module.exports = mongoose.model('Genetics', GeneticsSchema);
