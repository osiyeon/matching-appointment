const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const config       = require('config');
const cors         = require('cors');
const passportConfig = require('./passport');
require("dotenv").config();

const db = require('./models');
const routes = require('./routes');
const userRouter = require('./routes/user');

const port = config.get('port');
const clientUrl = config.get('client');

const app = express();

passportConfig(app);

app.use(bodyParser.json());
app.use(cors({origin: clientUrl}));

app.use('/', routes);
app.use('/auth', [userRouter]);

app.get('/', (req, res, next) => {
    res.send('hello world!');
});

db.once('open', function () {           
    console.log('DB Connected');
});

db.on('error', function (err) {
    console.log('DB ERROR : ', err);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
