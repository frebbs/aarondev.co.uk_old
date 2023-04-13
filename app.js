const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const rootRouter = require('./routes/rootRouter');

app.set('view engine', 'ejs');

app.use([
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
]);

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

