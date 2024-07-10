const { addProduct, getAllProduct, getById, deleteProduct, updateProduct } = require("../controller/productController");
const asyncHandler = require("../utils/asyncHandler");
const router=require("express").Router();

const multer  = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/upload')
    },
    filename: function (req, file, cb) {
      return cb(null,`${Date.now()}_${file.originalname}`)
    }
  })
  const upload=multer({storage:storage})


router.get('/',asyncHandler(getAllProduct));
router.get('/:id',asyncHandler(getById));
router.post("/addProduct",upload.single('image'),asyncHandler(addProduct));
router.put('/:id',upload.single('image'),asyncHandler(updateProduct));
router.delete('/:id',asyncHandler(deleteProduct));






module.exports=router;

