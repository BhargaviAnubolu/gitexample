const express = require('express')
var mongoose=require('mongoose')
const router = express.Router()
const Schema_post = require('../Models/Schema_post')
var ObjectId=mongoose.Types.ObjectId;
router.get('/', async(req,res) => {
    try{
           const data = await Schema_post.find()
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/public', async(req,res) => {
    try{

        Schema_post.aggregate([{
             $match:
                     {visibility:"public"}    
        },
        ],function(error,data){
            if(error)
            {
                res.send(error)
            }
             res.json(data);
        });
 }
 catch(err){
     res.send('Error ' + err)
 }
})
router.get('/getAllposts',async(req,res)=>{
   try{
    const data=await Schema_post.find();
    res.json(data);
   }
   catch(err){
    res.send(err)
   }
   
})
router.get('/:id', async(req,res) => {
    try{
           Schema_post.aggregate([{
                $match:{
                        _id:ObjectId(req.params.id)
                }},
                   {$lookup:{
                       from:"authors",
                       localField:"author_id",
                       foreignField:"_id",
                       as:"author"
                   }
                }
           ],function(error,data){
               if(error)
               {
                   res.send(error)
               }
                res.json(data);
           });
    }
    catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const data = new Schema_post({
        
        title:req.body.title,
        description:req.body.description,
        created_date:req.body.created_date,
        updated_date:req.body.updated_date,
        author_id:req.body.author_id,
        visibility:req.body.visibility
        
    })

    try{
        const a1 =  await data.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>
{ 
    try{
         const data = await Schema_post.updateOne({_id:req.params.id},req.body);
         res.send("updated")
         res.json(data)
        }
         catch(err){
              res.send('Error')
            }
    })




router.delete('/:id',async(req,res)=>{
    try{
        const data=await Schema_post.findById(req.params.id)
        await data.remove()
        res.send('deleted');
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router