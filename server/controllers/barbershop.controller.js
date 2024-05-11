import Appointment from "../models/barbershop.model.js";

async function createApp(req, res){
    try {
        const newApp = await Appointment.create(req.body);
        res.json(newApp);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllApps(req, res){
    try {
        const allApps = await Appointment.find();
        res.json(allApps);
    } catch (error) {
        console.log(error);
        res.status(400);
    }
}

async function getOneApp(req, res){
    try {
        const oneApp = await Appointment.findById(req.params.id);
        res.json(oneApp);
    } catch {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateApp(req, res){
    try {
        const updatedApp = await Appointment.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedApp);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteApp(req, res){
    try {
        const deletedApp = await Appointment.findByIdAndDelete(req.params.id);
        res.json(deletedApp);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
export {
    createApp,
    getAllApps,
    getOneApp,
    updateApp,
    deleteApp
};