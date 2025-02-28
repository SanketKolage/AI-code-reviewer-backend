const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;
        if (!code) return res.status(400).json({ message: "Code is required" });

        const response = await aiService(code);
        res.json(response);
    } catch (error) {
        console.error("AI Service Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
