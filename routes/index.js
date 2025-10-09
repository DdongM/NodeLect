const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req,res)=>{
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '../restFront.html'));
})
router.post()
router.delete()
module.exports = router;