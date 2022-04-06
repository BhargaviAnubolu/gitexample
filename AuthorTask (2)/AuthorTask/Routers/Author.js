const express = require('express');
const mongoose  = require('mongoose');
var bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");
 require('dotenv').config();
const router = express.Router()
const Schema_Author = require('../Models/Schema_Author')
const Schema_post=require('../Models/Schema_post')
var ObjectId=mongoose.Types.ObjectId;
router.post("/register", async (req, res) => {
    try {
      const {First_name, Last_name, email, password, qualification, domain, awards, gender } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await Schema_Author.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("Author Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);
      const author = await Schema_Author.create({
        First_name: First_name,
        Last_name: Last_name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        qualification: qualification,
        domain: domain,
        awards: awards, 
        gender: gender

      });
      
      const token = jwt.sign(
        { author_id: author._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h"
        }
      );
      author.token = token;
      res.status(201).json(author);
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
    //  Schema_Author.findOneAndUpdate({email:email},{flag:1})
      const author = await Schema_Author.findOne({ email });  
       Schema_Author.aggregate([{
        $match:{
            email: author.email
    }},
          {$lookup:{
              from:"posts",
              localField:"_id",
             foreignField:"author_id",
                   as:"posts"
          }
        }
      ],function(error,data){
        if(error)
        {

            res.send(error)
        }
        res.redirect('http://localhost:3001/post/')
    });


      if (author && (await bcrypt.compare(password, author.password))) {
        const token = jwt.sign(
          { author_id: author._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        author.token = token;
        
        res.status(200).json(author);
      }

      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });

router.get('/:id', async(req,res) => {
    try{
          // const data = await Schema_Author.findById(req.params.id)
          Schema_Author.aggregate([{
            $match:{
                _id:ObjectId(req.params.id)
        }},
              {$lookup:{
                  from:"posts",
                  localField:"_id",
                 foreignField:"author_id",
                       as:"posts"
              }
            }

          ],function(error,data){
            if(error)
            {
                res.send(error)
            }
             res.json(data);
        });
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const data = new Schema_Author({
        author_id:req.body.author_id,
        First_name:req.body.First_name,
	    Last_name:req.body.Last_name,
	    email:req.body.email,
	    password:req.body.password,
	    qualification:req.body.qualification,
	    domain:req.body.domain,
	    awards:req.body.awards,
	    gender:req.body.gender,
        
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
         const data = await Schema_Author.updateOne({_id:req.params.id},req.body);
         res.send("updated")
         res.json(data)
        }
         catch(err){
              res.send('Error')
            }
    })




router.delete('/:id',async(req,res)=>{
    try{
        const data=await Schema_Author.findById(req.params.id)
        await data.remove()
        res.send('deleted');
    }
    catch(err){
        res.send('Error')
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

module.exports = router