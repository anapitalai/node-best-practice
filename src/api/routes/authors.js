const express = require('express');
const router = express.Router();

router.post("/", async (req, res, next) => {
    const author = await authorController.createAuthor(req.body.name)
    res.status(201).json({
        message: "Created successfully",
        author
    })
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'All Authors were fetched'
    });
});


router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Author with id was fetch'
    });
});

module.exports = router;