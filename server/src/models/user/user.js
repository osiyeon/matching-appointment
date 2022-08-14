const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        userId: { type: String, required: true },
        nickname: { type: String, required: true },
        characterImg: {type: String, required: true},
        createdAt: { type: Date, default: Date.now, immutable: true },
    },
);

module.exports = mongoose.model('user', userSchema);