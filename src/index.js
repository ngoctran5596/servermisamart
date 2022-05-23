import dotenv from 'dotenv'
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { route } from './routes/index.js'
import { connectDb } from './config/db/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

//router
route(app);
connectDb();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})