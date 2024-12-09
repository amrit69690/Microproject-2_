import mongoose from "mongoose";

const myCollectionSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
    },
    { timestamps: true }
);

const MyCollection = mongoose.model("MyCollection", myCollectionSchema);

export default MyCollection;
