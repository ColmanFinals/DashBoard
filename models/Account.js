// models/Account.js

const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    videoQueries: { type: Number, default: 0 },
    videoWatches: { type: Number, default: 0 },
    // You can add more fields relevant to tracking other video-related metrics
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', AccountSchema);