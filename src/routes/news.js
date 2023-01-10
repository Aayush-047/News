const express=require('express');
const newsRouter=express.Router();
const axios=require('axios');

newsRouter.get('',async(req,res)=>{
    try {
        //newsapi.org
        const newsApi=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1cae66d962dd4bd79605225239347d7d`);
        // console.log(newsApi.data); 
        res.render('news',{articles:newsApi.data});    
    } catch (error) {
        console.log(error);
    }
});

newsRouter.post('',async(req,res)=>{
    let search=req.body.search;
    try {
        //newsapi.org
        const newsApi=await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&country=in&apiKey=1cae66d962dd4bd79605225239347d7d`);
        // console.log(newsApi.data); 
        res.render('newsSearch',{articles:newsApi.data});    
    } catch (error) {
        console.log(error);
    }
});


module.exports=newsRouter;
