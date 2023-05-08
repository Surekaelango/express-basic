
const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})

router.get('/:id([0-9])',(req,res)=>{

  if(req.params.id<=ServiceArrayLength){
    res.send(`Service Name for this id ${service[req.params.id-1].idno} is ${service[req.params.id-1].name}`)
  }
  else{
    res.send("Wrong id")
  }
  // res.send(`List of Service ${req.params.id}`)
})


const service=[{
  idno:1,
  name:'ser 1'
},
{
  idno:2,
  name:'ser 2'
},
{
  idno:3,
  name:'ser 3'
},
{
  idno:4,
  name:'ser 4'
}]

const ServiceArrayLength=service.length;
module.exports=router;