const express = require("express");
require("dotenv").config();

const inventoryRouter = express.Router();

const { Inventorymodel } = require("../models/inventory.model");
const { Oemcarmodel } = require("../models/oemcar.model");
const { authenticator } = require("../middlewares/authenticator.middleware");
const { authorizer } = require("../middlewares/authorizer.middleware");


inventoryRouter.post("/addcar", authenticator, authorizer(["dealer"]), async (req, res) => {
    const { brand, model_name, model_year, color, odometer_km, major_accidents, previous_owners, registration_place, description, image, userID } = req.body;
    try {
        const oemcar=await Oemcarmodel.findOne({"brand":brand,"model_name":model_name})
        if(oemcar){
            const car= new Inventorymodel({brand,model_name,model_year,color,odometer_km,major_accidents,previous_owners,registration_place,description,image,userID,oemcar_id:oemcar._id});
            await car.save();
            res.status(201).json({ "msg": "new car added successfully"});
        }else{
            const car= new Inventorymodel({brand,model_name,model_year,color,odometer_km,major_accidents,previous_owners,registration_place,description,image,userID});
            await car.save();
            res.status(201).json({ "msg": "new car added successfully but no OEM available currently"});
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ "msg": "something went wrong while adding new car" })
    }
})


inventoryRouter.get("/allcars",async(req,res)=>{
    try {
        const allcars=await Inventorymodel.find();
        res.status(200).json({"msg":"fetched all cars successfully","data":allcars});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ "msg": "something went wrong while getting all cars" })
    }
})



module.exports = {
    inventoryRouter
}