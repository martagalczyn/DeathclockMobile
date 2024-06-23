// models/HealthCheck.js
const mongoose = require('mongoose');

const HealthCheckSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bloodPressure: String,
    cholesterolLevel: String,
    weight: Number,
    height: Number,
});

module.exports = mongoose.model('HealthCheck', HealthCheckSchema);
