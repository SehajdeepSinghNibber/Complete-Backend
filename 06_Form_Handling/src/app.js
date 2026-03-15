import express from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Global middleware
app.use((req,res,next)=>{
    console.log('Middleware Executed')
    next()
})

app.use('/',(req,res,next)=>{
    console.log('Middleware Executed Hai Bhai')
    next()
})

app.get('/',(req,res,next)=>{
    next(new Error('Something went wrong'))
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

// Error middleware
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

export default app