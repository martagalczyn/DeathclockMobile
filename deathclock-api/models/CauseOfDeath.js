const mongoose = require('mongoose');

const CauseOfDeathSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cause: String,
});

module.exports = mongoose.model('CauseOfDeath', CauseOfDeathSchema);
