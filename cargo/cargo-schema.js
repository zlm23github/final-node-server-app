import mongoose from 'mongoose';

const cargoSchema = mongoose.Schema({
    name: String,
    img: String,
    briefDesc: String,
    desc: String,
    sales: Number,
    price: Number,
}, {collection: 'cargo'});
export default cargoSchema;