const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const {connect, sql} = require('./database/connect');
const querys = require('./database/query');
const router = express.Router();
//const CompanyController = require('./controller/CompanyController');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Router init
const route = require('./routes');
route(app);

//router.get('/company', CompanyController.getAllCompany);



app.listen(3000, () => {
    console.log('listening on port 3000');
})