const express = require('express')
const { addVendor, getVendors, deleteVendor, updateVendor,getVendorById } = require('../controllers/vendorController')
const router = express.Router()


router.post('/add-vendor' , addVendor )
router.get('/vendors' , getVendors)
router.post('/delete-vendor' , deleteVendor)
router.put('/edit-vendor/:id' , updateVendor)
router.get('/get-vendor/:id', getVendorById);



module.exports = router