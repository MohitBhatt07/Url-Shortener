const express = require("express");
const { getShortId, getAnalytics, deleteEntry } = require("../controllers/urlController");

const router = express.Router();

router.post('/' ,getShortId);
router.get('/analytics/:shortId', getAnalytics);
router.post('/delete/:shortId' , deleteEntry);

module.exports = router;