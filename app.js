const express=require('express');
const app=express();
const bodyParser=require('body-parser');

const port=3000;

//static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));
app.use('/js',express.static(__dirname+'public/js'));

//templating engine
app.set('views','./src/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

//routes
const newsRoutes=require('./src/routes/news');
app.use('/',newsRoutes);


//listening to port 3000
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
