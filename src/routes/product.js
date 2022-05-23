import express from 'express';
const routerNews = express.Router();
import { productControllers } from '../app/controllers/NewsControllers.js';
import { upload } from '../config/upload.js';


// routerNews.get('/:slug', newControllers.slug);
routerNews.get('/', productControllers.index);
routerNews.get('/create', productControllers.create);
routerNews.post('/add',upload.single('formFile'), productControllers.addProduction);




export { routerNews };