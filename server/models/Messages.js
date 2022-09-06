// import {Schema, model} from 'mongoose';
const {Schema, model} = require('mongoose');

const sendMessageSchema = Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        message: {
            type: String,
            required: true,
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
);


const sendMessage = model("Message", sendMessageSchema);

module.exports = sendMessage;

// export default sendMessage;
