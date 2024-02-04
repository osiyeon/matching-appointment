const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema(
  {
    userId: { type: String, required: true },
    nickname: { type: String, required: true },
    characterImg: String,
    email: String,
    ageRange: String,
    gender: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)
