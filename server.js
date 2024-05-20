const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require('./routes');
const setupSwagger = require('./swagger');

app.use(express.json());
app.use('/api', apiRoutes);

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
