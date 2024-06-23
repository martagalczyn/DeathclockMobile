const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    feedback: String,
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
