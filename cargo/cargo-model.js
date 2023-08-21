import mongoose from 'mongoose';
import cargoSchema from './cargo-schema.js';

const cargoModel = mongoose.model('CargoModel', cargoSchema);
export default cargoModel;