const jwt=require("jsonwebtoken")

const cartAuthanticate = (req,res,next)=>{

    const token = req.headers.authorization;
    if(token){
            jwt.verify(token,'firstcry',(err,decoded)=>{
            if(decoded){
                req.body.user = decoded.userId
                //console.log(req.body)
                next()
            }else{
                req.send({'err':err})
            }
        })
    }else{
        res.send({'msg':'Please Login for Cart !'})
    }

}

module.exports={cartAuthanticate}