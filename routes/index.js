const CompanyRouter = require('./CompanyRouter');
const CarRouter = require('./CarRouter');
const DriverRouter = require('./DriverRouter');
const TypeCarRouter = require('./TypeCarRouter');

const route = (app) => {
    app.use('/api/company', CompanyRouter);
    app.use('/api/car', CarRouter);
    app.use('/api/driver', DriverRouter);
    app.use('/api/typecar', TypeCarRouter);
}

module.exports = route