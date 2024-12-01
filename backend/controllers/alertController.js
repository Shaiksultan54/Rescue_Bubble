// controllers/alertController.js

const Alert = require('../models/Alert');

exports.createAlert = async (req, res) => {
    try {
        const { sender, receiver, message, priority } = req.body;
        const alert = new Alert({ sender, receiver, message, priority });
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find().populate('sender').populate('receiver');
        res.status(200).json(alerts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAlertStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const alert = await Alert.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(alert);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
