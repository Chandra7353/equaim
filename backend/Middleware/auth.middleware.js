const jwt = require('jsonwebtoken')

require('dotenv').config();



let auth=async (req,res,next)=>
{
    try
    {
        //! if there is token it returns a token prefixed with bearer else returns undefined
        let authToken=req.headers.authorization;

        if(!authToken || !authToken.startsWith("Bearer"))
        {
            return res.status(500).json({error:true,message:"Token Required"})
        }
        //! getting the token without Bearer
        let token=authToken.split(" ")[1];
        let decodedData=jwt.verify(token, process.env.JWT_KEY);
        // let user = await User.findById(decodedData.id)
        let {email,name,_id}=decodedData;
       

        req.user={email,name,_id}

        next()
    }
    catch(err)
    {
        next(err)
    }
}

module.exports={
    auth
}