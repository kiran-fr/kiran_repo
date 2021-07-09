const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
const staticPath = path.join(__dirname,"../public")

// const aboutPath = path.join(__dirname,"../views");
// const partialsPath = path.join(__dirname,'../views/partials')
//this is partial path setting
// const partialPath = path.join(__dirname,'../views/partials')
//set the view
// app.set('view engine','hbs')
// app.set("views",aboutPath)
//display engine 
// app.get('/',(req,res)=>{
//     res.render('index',{
//         name:"Kiran Reddy"
//     })
// })
// app.get('/about',(req,res)=>{
//     res.render('about')
// })
// app.get('/contact',(req,res)=>{
//     res.render('about')
// })
// app.get('/services',(req,res)=>{
//     res.render('about')
// })
// hbs.registerPartials(partialPath)
// app.use(express.static(staticPath))

const pageSet = path.join(__dirname,'./pages')
app.set('view engine','hbs')
app.set('views',pageSet)
hbs.registerPartials(pageSet)

app.get('/',(req,res)=>{
    res.render('main')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/service',(req,res)=>{
    res.render('service')
})

app.listen(2100,()=>{
    console.log('Listening ate port 3000')
})