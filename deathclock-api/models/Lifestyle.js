// models/Lifestyle.js
const mongoose = require('mongoose');

const LifestyleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    exerciseLevel: String,
    diet: String,
    smoking: Boolean,
    alcohol: Boolean,
});

module.exports = mongoose.model('Lifestyle', LifestyleSchema);
