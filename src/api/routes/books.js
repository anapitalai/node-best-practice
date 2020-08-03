const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'All Books were fetched'
    });
});


router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Book with id was fetch'
    });
});

module.exports = router;