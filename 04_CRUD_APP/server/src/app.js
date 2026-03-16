import express from "express";
import dotenv from "dotenv";
import multer from "multer"
import cors from "cors";
import uploadFile from "../services/storage.service.js";
import postModel from "../src/models/post.model.js"

dotenv.config();

const app = express();

const upload = multer({storage:multer.memoryStorage()})

app.use(express.json());

app.use(cors())

app.post('/create-post', upload.single("Image"), async (req,res)=>{
    
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    console.log(result);

    const post = await postModel.create({
        Post:result.url,
        Caption:req.body.Title
    })

    return res.status(201).json({
        message:"Post Created Successfully",
        post
    })

})

app.get("/posts",async (req,res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
        message:"Post Fetched Successfully",
        posts
    })

})
    
app.delete("/posts/:id", async (req, res) => {

    await postModel.findByIdAndDelete(req.params.id);
  
    return res.status(200).json({
      message: "Post deleted successfully"
    });
  
  });

export default app;