const { Router } = require('express');
const router = Router();

router.get('/', (req,res) =>{
    const data = {
        "name": "Fede",
        "website": "portfolio"
    };
    res.json(data);
});

module.exports = router;