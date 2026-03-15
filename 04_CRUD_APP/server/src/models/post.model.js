import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  Post: {
    type: String,
    required: true
  },
  Caption: {
    type: String,
    required: true
  }
});

const postModel = mongoose.model("Post", postSchema);

export default postModel;