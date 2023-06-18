
const authorizer=(role_array)=>{
    return (req,res,next)=>{
        const role=req.body.userRole;
        if(role_array.includes(role)){
            next();
        }else{
            res.send("You are not Authorized");
        }
    }
}


module.exports={
    authorizer
}