const express = require('express');
const router = express.Router();
const asknetilabController = require('../controllers/asknetilabController');

/**
 * @swagger
 * /asknetilab:
 *   post:
 *     summary: Process text input
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "กินข้าวรึยัง"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   docid:
 *                     type: integer
 *                     example: 47817
 *                   dknum:
 *                     type: integer
 *                     example: 522
 *                   dkyear:
 *                     type: integer
 *                     example: 2546
 *                   s_text:
 *                     type: string
 *                     example: "Example text..."
 *                   exact_score:
 *                     type: number
 *                     example: 0.5127553351499101
 *                   near_score:
 *                     type: number
 *                     example: 0.03027259661098669
 *                   exact_res:
 *                     type: number
 *                     example: 0.11917387844236198
 *                   near_res:
 *                     type: number
 *                     example: 0.04137506569755308
 *                   total:
 *                     type: number
 *                     example: 0.49533101814871944
 */
router.post('/', asknetilabController.handleAskNetilab);

module.exports = router;
