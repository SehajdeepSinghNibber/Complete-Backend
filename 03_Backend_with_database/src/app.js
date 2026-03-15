import express from "express";
import noteModel from "./models/note.model.js";

const app = express();
app.use(express.json());

/*

POST /notes => Create a note
GET /notes => Get all notes
PATCH /notes/:id => Update a note
DELETE /notes/:id => Delete a note

*/

/* notes = {title,description} */

app.post("/notes",async(req,res)=>{
    const data = req.body /* {title,description} */ 
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note Created"
    })
})

app.get("/notes",async(req,res)=>{
   
    const notes = await noteModel.find()

    //To find one 

    /*
    
    const notes = await noteModel.findOne({
        
        title:"test_data_1"
    
    }) 
    
    It will find the data with this title only

    */

    // find will return array [{},{}] or [] of object while 
    // findOne will return only object {} or null

    res.status(200).json({
        message:"Note Fetched Successfully",
        notes:notes
    })
})

app.delete("/notes/:id", async (req,res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message:"Note Deleted Successfully",
    })

})

app.patch("/notes/:id", async (req,res)=>{

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id: id
    },{
        description: description
    })

    res.status(200).json({
        message:"Note Updated Successfully",
    })
})



export default app;