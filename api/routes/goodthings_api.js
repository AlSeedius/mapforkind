const express = require("express");
const router = express.Router();
const goodthings = require('../services/goodthings')

router.get('/:id',  async function(req, res, next) {
    try {
        res.json(await goodthings.getMultiple(req.params.id));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;