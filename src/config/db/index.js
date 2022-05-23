
import mongoose from 'mongoose';


async function connectDb() {
    try {
        await mongoose.connect('mongodb+srv://ngoctran:ngoc123@cluster0.cwv8r.mongodb.net/?retryWrites=true&w=majority');
        console.log('connect success');
    } catch (error) {
        console.log('connect Fail');

    }

}

export {
    connectDb
}