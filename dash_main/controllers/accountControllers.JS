// controllers/accountController.js

const { Account } = require("../models/Account");

exports.createAccount = async (req, res) => {
    try {
        const { username, email } = req.body;
        const newAccount = new Account({ username, email });
        await newAccount.save();
        res.status(201).send('Account created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVideoMetrics = async (req, res) => {
    try {
        const { username, videoQueries, videoWatches } = req.body;
        const account = await Account.findOneAndUpdate(
            { username },
            { $inc: { videoQueries, videoWatches } },
            { new: true }
        );
        res.status(200).send(`Updated metrics for ${account.username}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
