// controllers/agencyController.js
const Agency = require('../models/Agency');

exports.createAgency = async (req, res) => {
    try {
        const { name, address, location, contactDetails, expertise, resources } = req.body;
        const agency = new Agency({ name, address, location, contactDetails, expertise, resources });
        await agency.save();
        res.status(201).json(agency);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAgencies = async (req, res) => {
    try {
        const agencies = await Agency.find().populate('resources.resourceId');
        res.status(200).json(agencies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAgency = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const agency = await Agency.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(agency);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAgency = async (req, res) => {
    try {
        const { id } = req.params;
        await Agency.findByIdAndDelete(id);
        res.status(200).json({ message: 'Agency deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
