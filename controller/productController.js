const productModel=require("../models/product");
const productJoi = require("../validation/productVal");



const addProduct= async(req,res)=>{
    // const data=req.body;
    // const newData=new productModel(data);
    // if(!newData) throw new error(400,error);
    // await newData.save();
    // res.status(200).send({message: "Data is saved successfully"});
    const { title, Description, price, quantity } = req.body;
    const image = req.file ? req.file.filename : null;

    const { error } = productJoi.validate({ title, Description, price, quantity, image });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newData = new productModel({
            title,
            Description,
            price,
            quantity,
            image,
        });
      console.log(newData)

        await newData.save();
        res.status(200).send({ message: "Data is saved successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
//get all data
const getAllProduct=async(req,res)=>{

    const allData=await productModel.find({});
    
    res.status(200).send({data:allData,message:"ok"});
   
}

//get product by id

const getById=async(req,res)=>{
     
    const id=req.params.id
    const data=await productModel.findById(id);
    
    res.status(200).send({data:data,message:"ok"})
   
}

//Delete a product

const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    const data=await productModel.findByIdAndDelete(id);
    res.status(200).send({message:"data is deleted successfully"});
}

// update product details
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        if (req.file) {
            newData.image = req.file.filename;
        }

      
        // Log request body to debug
        console.log('Request Body:', newData);

        const { error } = productJoi.validate(newData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const updatedData = await productModel.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).send({ message: "Product details updated successfully", data: updatedData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const updateProduct=async(req,res)=>{
//     const id=req.params.id;
//     const newData=req.body;
//     console.log(newData);
//     await productModel.findByIdAndUpdate(id,newData,{ new: true });
//     res.status(200).send({message:"Product details updated successfully"})


// }

module.exports={addProduct,getAllProduct,getById,deleteProduct,updateProduct};