
// controllers/disasterController.js

const Disaster = require('../models/Disaster');

exports.createDisaster = async (req, res) => {
    try {
        const { type, description, severityLevels } = req.body;
        const disaster = new Disaster({ type, description, severityLevels });
        await disaster.save();
        res.status(201).json(disaster);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.find();
        res.status(200).json(disasters);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDisaster = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const disaster = await Disaster.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(disaster);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDisaster = async (req, res) => {
    try {
        const { id } = req.params;
        await Disaster.findByIdAndDelete(id);
        res.status(200).json({ message: 'Disaster deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
