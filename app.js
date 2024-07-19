const express=require('express');
const app=express();

const router=express.Router();
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs')

router.get('/',(req,res)=>{
   const courses=[
    "php","js","react","java","mongodb","node js","express js"
   ];

   res.status(200).render('index',{
    docTitle:"Welcome to EJS",
    courses,
    path:'index'
   })
})

router.get('/about',(req,res)=>{

    const courses=[
        "php","js","react","java","mongodb","node js","express js"
       ];

    res.status(200).render('about',{
        docTitle:"About Page",
        active:'about',
        courses,
        path:'about'
    })
})

router.use((req,res,next)=>{
    res.status(200).render('404',{
        docTitle:"404 page not found",
        path:'404'
    })
})

app.use(router);

app.listen(3000,()=>{
    console.log('server is Running 3000');
})