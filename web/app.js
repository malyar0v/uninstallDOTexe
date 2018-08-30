const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes/routes');

app.set('view engine', 'pug');
app.set('views', './web/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));