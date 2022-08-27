const { Schema, model } = require("mongoose")

const friendSchema = Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

const Friends = model("Friend", friendSchema);

module.exports = Friends;
