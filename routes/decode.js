const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const encodedText = req.body.encodedText;
    try {
        const decodedText = Buffer.from(encodedText, 'base64').toString('utf-8');
        res.render('result', { decodedText });
    } catch (error) {
        res.send('Invalid Base64 string.');
    }
});

module.exports = router;
