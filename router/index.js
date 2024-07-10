const router=require('express').Router();
const productRoutes=require('./productRouter');
const userRoutes=require('./userRouter');

router.use('/user',userRoutes);
router.use('/product',productRoutes);



module.exports=router;
