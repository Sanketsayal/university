const express=require('express')


const port=4000
const app=express()


app.use(express.static('./assets'))
app.use('/',require('./routes'))

app.use('/',require('./routes'))

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server running on port:${port}`)
})