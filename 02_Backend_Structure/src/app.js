import express from "express"
import { dlopen } from 'node:process';


const app = express()
app.use(express.json()) //middleware iske bina not possible, POSTMAN ka data padhne layak bna dega

const notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    
    res.status(201).json({
        message:"note created successfully"
    })// json is used to send message

    console.log(req.body)//shows content that is being inside post
})

app.get('/notes',(req,res)=>{

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

/*delete/notes/:index*/
app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[ index ]

    res.status(200).json({
        message:"Note is Deleted Successfully"
    })
})
//: ke baad aane wala dynamic rahega

app.patch('/notes/:index',(req,res)=>{

    const index = req.params.index
    const description = req.body.description

    notes[ index ].description = description

    res.status(200).json({
        message:"Note updated successfully"
    })

})
export default app

//app.js file ka kaam hai server ko create krna