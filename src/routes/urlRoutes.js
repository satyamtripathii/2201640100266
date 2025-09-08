const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Url = require('../models/Url');

const router = express.Router();

// Create short URL
router.post('/', async (req, res) => {
  try {
    const { url, validity = 30, customCode } = req.body;
    const shortCode = customCode || uuidv4().slice(0, 6);
    const expiry = new Date(Date.now() + validity * 60 * 1000);

    const newUrl = await Url.create({
      shortCode,
      originalUrl: url,
      expiry
    });

    res.json({
      shortLink: `http://localhost:3000/${shortCode}`,
      expiry: newUrl.expiry
    });
  } catch (err) {
  console.error(err);  // ye error console pe dikhayega
  res.status(400).json({ error: err.message });
}

});

// Redirect
router.get('/:shortCode', async (req, res) => {
  try {
    const urlDoc = await Url.findOne({ shortCode: req.params.shortCode });
    if (!urlDoc) return res.status(404).json({ error: 'Not found' });

    if (new Date() > urlDoc.expiry) {
      return res.status(410).json({ error: 'Link expired' });
    }

    urlDoc.clicks += 1;
    urlDoc.clickDetails.push({ referrer: req.headers.referer || 'direct', location: 'unknown' });
    await urlDoc.save();

    res.redirect(urlDoc.originalUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
