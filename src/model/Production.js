import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const Production = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });

const ProductionSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    date: { type: Date, default: Date.now },
});
const Production = mongoose.model('Production', ProductionSchema)

export { Production }