const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require('./routes');
const asknetilabRoutes = require('./routes/asknetilabRoutes');
const setupSwagger = require('./swagger');

app.use(express.json());
// Use routes
app.use('/api', apiRoutes);
app.use('/asknetilab', asknetilabRoutes);

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('Hello World! 1.5');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
