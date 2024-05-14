import mongoose from "mongoose";

// Define the schema for the blog
const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blogImage: {
        type: String // Optional field
    }
}, {
    timestamps: true
});

// Create the model from the schema
export const BlogModle = mongoose.model('Blog', blogSchema);

