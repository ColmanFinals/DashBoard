const { Account } = require("../models/Account"); // Import the Account model

const adminDashboard = async (req, res) => {
    try {
        // Account statistics, such as total number of video queries and watches per account
        const accountStats = await Account.find({}, 'username videoQueries videoWatches');

        // The existing logic to fetch and prepare user and sales statistics can remain the same if it still serves your purpose

        // Rendering the view with account statistics, user statistics, and sales over time.
        return res.render('adminDashboard', {
            accountStats,
            statistics: statistics,
            sales: {
                dates,
                sales
            },
            status: ''
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
