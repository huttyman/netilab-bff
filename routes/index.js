const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to the API
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
    res.send('Hello from the API! 1.3');
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns a list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ]);
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 123456789
 *                 name:
 *                   type: string
 *                   example: Alice
 */
router.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = Date.now();
    res.status(201).json(newUser);
});

module.exports = router;
