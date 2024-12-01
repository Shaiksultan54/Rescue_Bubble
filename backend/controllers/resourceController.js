// controllers/resourceController.js
const Resource = require('../models/Resource');

exports.createResource = async (req, res) => {
    try {
        const { name, description, category } = req.body;
        const resource = new Resource({ name, description, category });
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const resource = await Resource.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(resource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteResource = async (req, res) => {
    try {
        const { id } = req.params;
        await Resource.findByIdAndDelete(id);
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
