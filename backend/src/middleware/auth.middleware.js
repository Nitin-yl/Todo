const auth=(req,res,next)=>{
    if(!req.session.username){
        res.status(401).json({message:"Unauthorized"})
    }
    next()
}

module.exports=auth