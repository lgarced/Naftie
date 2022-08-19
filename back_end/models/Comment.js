import { Schema, model } from "mongoose";



const commentSchema = Schema(
    {   
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        comment: {
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

const Comment = model("Comment", commentSchema);


export default Comment;

