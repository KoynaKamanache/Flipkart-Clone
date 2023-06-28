import express from 'express';
import { userSignup,userLogin } from '../controller/user-controller';
import { getProducts } from '../controller/product-controller';

const router = express.Router();


router.post('/signup' , userSignup);
router.post('/login' , userLogin);

router.get('/products',getProducts);  

export default router;