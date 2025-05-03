const express = require('express');
const router = express.Router();
const qrcode = require('qrcode');

router.get('/', (req, resp) => {
    resp.render('./pages/frontend.ejs', { image: null});
})

router.post('/', async (req, resp) => {
    const url = req.body.url;
    try {
        const qr = await qrcode.toDataURL(url);
        resp.render('./pages/frontend.ejs', {image:qr,url});
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;