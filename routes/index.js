const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from the API!');
});

router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ]);
});

router.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = Date.now();
    res.status(201).json(newUser);
});

module.exports = router;
