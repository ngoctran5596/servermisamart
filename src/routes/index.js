import {routerNews} from './product.js';


export function route( app){
    app.use('/products',routerNews )
}
