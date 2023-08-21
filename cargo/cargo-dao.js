import cargoModel from "./cargo-model.js";

export const findCargoByName = (name) => {
    const cargo = cargoModel.findOne({name})
    return cargo;
}
export const findCargo = () => cargoModel.find();
export const createCargo = (cargo) => cargoModel.create(cargo);
export const deleteCargo = (cid) => cargoModel.deleteOne({_id: cid});
export const updateCargo = (cid, cargo) => cargoModel.updateOne({_id: cid}, {$set: cargo})

export const findCargoById = (id) => {
    const cargo = cargoModel.findById(id);
    return cargo;
};