const CompanyRouter = require("./CompanyRouter");
const VehicleRouter = require("./VehicleRouter");
const DriverRouter = require("./DriverRouter");
const StationRouter = require("./StationRouter");
const AuthRouter = require("./AuthRouter");

const route = (app) => {
  app.use("/api/company", CompanyRouter);
  app.use("/api/vehicle", VehicleRouter);
  app.use("/api/driver", DriverRouter);
  app.use("/api/station", StationRouter);
  app.use("/api/auth", AuthRouter);
};

module.exports = route;
