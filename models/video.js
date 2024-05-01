const mongoose = require("mongoose");
const videoSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        length: { type: Number, required: true },
        creationTime:{ type: Number, required: true },
            title: { type: String, required: true },
            url: { type: String, required: true },
            viewCount: { type: Number, default: 0 },
            qrCode: { type: Number, default: 777 },
            videos: [videoSchema]  // Embedding video schema
    }, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
///Video Schema: This is a sub-document schema for videos, allowing each user to have their own list of videos with specific properties like title, description, URL, and view count. Using sub-documents can simplify interactions within the database by embedding video data directly within each user document.