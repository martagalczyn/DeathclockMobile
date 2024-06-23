const User = require('../models/User');
const Lifestyle = require('../models/Lifestyle');
const Genetics = require('../models/Genetics');
const HealthCheck = require('../models/HealthCheck');
const { calculateDeathPrediction } = require('../utils/DeathClockLogic');

const addUser = async (req, res) => {
    const { name, dateOfBirth, lifestyle, genetics, healthCheck } = req.body;

    try {
        const newUser = new User({ name, dateOfBirth });
        await newUser.save();

        const newLifestyle = new Lifestyle({ userId: newUser._id, ...lifestyle });
        await newLifestyle.save();

        const newGenetics = new Genetics({ userId: newUser._id, ...genetics });
        await newGenetics.save();

        const newHealthCheck = new HealthCheck({ userId: newUser._id, ...healthCheck });
        await newHealthCheck.save();

        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const lifestyle = await Lifestyle.findOne({ userId: user._id });
        const genetics = await Genetics.findOne({ userId: user._id });
        const healthCheck = await HealthCheck.findOne({ userId: user._id });

        const prediction = calculateDeathPrediction(user.dateOfBirth, lifestyle, genetics, healthCheck);

        res.json({ user, lifestyle, genetics, healthCheck, prediction });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = { addUser, getUser };
