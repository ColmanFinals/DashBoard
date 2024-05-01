const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, min: 6, max: 255},
        account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
