import axios from 'axios'
import toast from 'react-hot-toast'

const api = axios.create({
    baseURL: 'https://vendors-dashboard-1.onrender.com'
})

//google login
export const googleAuth = (code)=> api.get(`/auth/google?code=${code}`) // this code is destructre from query

//add vendor details
export const addVendor = async(vendorData)=>{
    const toastid = toast.loading("Loading...")
    try{
        const response = await api.post('/api/v1/add-vendor' , vendorData)
        console.log(response)
        toast.success("Vendor Added")
    }
    catch(err){
        console.log(err)
    }
    toast.remove(toastid)
}

//get Vendor
export const fetchVendors = async(pageNumber , setVendors , setTotalPages)=>{

    const toastid = toast.loading('Loading...')
    try{

        const response = await api.get(`/api/v1/vendors?page=${pageNumber}&limit=4`)
        setVendors(response.data.vendors);
        setTotalPages(response.data.totalPages);
        // console.log(response)

    }
    catch(err){
        console.log(err)
    }
    toast.remove(toastid)
}


//delete vendor
export const deleteVendor = async(vendorId)=>{

    const toastid = toast.loading("Loading...")
    try{

        const resposne = await api.post('/api/v1/delete-vendor', {vendorId})
        // console.log(resposne)
        toast.success("Vendor Deleted")

    }
    catch(err){
        console.log(err)
    }
    toast.remove(toastid)

}

//get single vendor
export const getVendorById = async (id) => {
    const toastid = toast.loading("Loading...")
    try{
        const res = await api.get(`/api/v1/get-vendor/${id}`);
        // console.log(res)
        toast.remove(toastid) 
        return res.data.vendor;
    }
    catch(err){
        console.log(err)
    }
    toast.remove(toastid)  
};

//update vendor
export const updateVendor = async(id , vendorData)=>{

    const toastid = toast.loading("Loading...")
    try{
        const response = await api.put(`/api/v1/edit-vendor/${id}` , vendorData)
        console.log(response)
        toast.success("Vendor Details Updated")
    }
    catch(err){
        console.log(err)
    }
    toast.remove(toastid)
}