const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require('./routes');
const asknetilabRoutes = require('./routes/asknetilabRoutes');
const queryNetilabAiRoutes = require('./routes/queryNetilabAiRoutes');
const setupSwagger = require('./swagger');

app.use(express.json());
// Use routes
app.use('/api', apiRoutes);
app.use('/asknetilab', asknetilabRoutes);
app.use('/query-netilab-ai', queryNetilabAiRoutes);

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('Hello World! 2.2');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
