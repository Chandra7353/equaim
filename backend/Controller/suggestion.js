const Userdata =require("../Models/suggestion.model")


let addfeedback =async (req,res,next)=>
{
    try
    {
        let {userid,title, category, details}=req.body;     
       userid=req.user._id
        let createfeedback=await Userdata.create({userid,title, category, details});


        if(createfeedback)
        {
            return res.status(201).json({error:false,message:"feedback Added Successfully",data:createfeedback})
        }
        return res.status(500).json({error:false,message:"error creating a feedback",data:createfeedback})
    }
    catch(err)
    {
        next(err)
    }
}

let editfeedback=async (req,res,next)=>
{
    try
    {
      
      let isAvailable=await Userdata.findOne({_id:req.params.id})
console.log(isAvailable);
      if(!isAvailable)
      {
        return res.status(404).json({error:true,message:"No feedback Found"})
      }
     
        let feedback=await Userdata.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true,runValidators:true});
        
        return res.status(200).json({error:false,message:"feedback edited Successfully",data:feedback})   
    }
    catch(err)
    {
        next(err)
    }
}

let deletefeedback=async (req,res,next)=>
{
    try
    {
       
      let Available=await Userdata.findOne({_id:req.params.id})

      if(!Available)
      {
        return res.status(404).json({error:true,message:"No feedback Found"})
      }
     
        let task=await Userdata.deleteOne({_id:req.params.id});
        return res.status(200).json({error:false,message:"feedback Deleted Sucessfully"})   
    }
    catch(err)
    {
        next(err)
    }
}

let getAllfeedback=async (req,res,next)=>
{
    try
    {
       
        let allfeedback=await Userdata.find();

        if(!allfeedback.length)
        {
            return res.status(404).json({error:true,message:"No feedback Available",})
        }
        return res.status(200).json({error:false,message:"feedback fetched Sucessfully",data:allfeedback})
    }
    catch(err)
    {
        next(err)
    }
}





module.exports = {addfeedback, editfeedback, deletefeedback,getAllfeedback}