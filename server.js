function requireHTTPS(req,res,next) {
    if (!req.secure && req.get('x-forwarded-proto')!== 'https') {
        return res.redirect('https://'+req.get('host')+req.url);
    }
    next();
}

const express=require('express');
const app=express();

//app.use(requireHTTPS);
app.use(express.static('dist/test-angular'));

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/test-angular'}),);

const port=process.env.PORT || 8000
app.listen(port,()=> {
    console.log(`Example app listening at http://localhost:${port}`);
})