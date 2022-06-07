const VehicleRouter = require("./VehicleRouter");
const DriverRouter = require("./DriverRouter");
const StationRouter = require("./StationRouter");
const SchedulerRouter = require("./SchedulerRouter");
const SchedulerDetailRouter = require("./SchedulerDetailRouter");
const BookingRouter = require("./BookingRouter");
const UltilsRouter = require("./UltilsRouter");
const TableKeyRelationRouter = require("./TableKeyRelationRouter");
const TransactionRouter = require("./TransactionRouter");

const route = (app) => {
  app.use("/api/vehicle", VehicleRouter);
  app.use("/api/driver", DriverRouter);
  app.use("/api/station", StationRouter);
  app.use("/api/scheduler", SchedulerRouter);
  app.use("/api/schedulerdetail", SchedulerDetailRouter);
  app.use("/api/booking", BookingRouter);
  app.use("/api/ultils", UltilsRouter);
  app.use("/api/tablekeyrelation", TableKeyRelationRouter);
  app.use("/api/transaction", TransactionRouter);
};

module.exports = route;
