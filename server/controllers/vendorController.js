const Vendor = require("../models/Vendor");


//add vendor
exports.addVendor = async(req,res)=>{

    try{

        const {name , accNo , bankName , addressL1 , addressL2 , city , country , zip} = req.body;
        if(!name || !accNo || !bankName || !addressL2){
            return res.status(404).json({
                success:false,
                message:"Please fill required field"
            })
        }

        const newVendor = await Vendor.create({
            name:name,
            Account:accNo,
            bankName,
            addressL1,
            addressL2,
            city,
            country,
            zip
        })

        return res.status(200).json({
            success:true,
            message:"Vendor Added Sucessfully",
            newVendor
        })
    
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}

//get vendor 
exports.getVendors = async(req,res)=>{
    try{
        const {page=1 , limit =4} = req.query;

        const vendors = await Vendor.find().skip((page-1)*limit).limit(parseInt(limit));
        const totalCount = await Vendor.countDocuments();

        return res.status(200).json({
            success:true,
            message:"Vendor Fetched Successfully",
            vendors,
            totalPages:Math.ceil(totalCount/limit),
            currentPage: parseInt(page)
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}

//delete vdenodr

exports.deleteVendor = async(req,res)=>{

    try{
        const vendorId = req.body.vendorId;
        if(!vendorId){
            return res.status(404).json({
                success:false,
                message:"Invalid Vendor Id"
            })
        }

        await Vendor.findByIdAndDelete(vendorId)

        return res.status(200).json({
            success:true,
            message:"Vendor Deleted"
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}

//Edit or update vendor 
exports.updateVendor = async(req,res)=>{
    try{
        
        //  const {name , accNo , bankName , addressL1 , addressL2 , city , country , zip} = req.body;
        const updated = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated){
            return res.status(404).json({
                success:false,
                message: 'Vendor not found'
            });
        }

        return res.status(200).json({
            success:true,
            message:"Vendor Updated",
            updated
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}

//get single vendor by id 
exports.getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        return res.status(200).json({
            sucess:true,
            message:"Vendor Fetched Successfully",
            vendor
        })
    } catch (error) {
        console.log(err)
        res.status(500).json({ 
            sucess:false,
            message:"Internal Sever Error while fetching vendor",
            error: error.message
         });
    }
};
