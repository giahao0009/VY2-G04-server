const { Sequelize } = require("sequelize");
const { DATABASE } = require("../config");
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = DATABASE;

// Models
const CompanyModel = require("./Company");
const VehicleModel = require("./Vehicle");
const VehicleTypeModel = require("./VehicleType");
const DriverModel = require("./Driver");
const SchedulerModel = require("./Scheduler");
const SchedulerDetailModel = require("./SchedulerDetail");
const StationModel = require("./Station");
const CustomerModel = require("./Customer");
const BookingModel = require("./Booking");
// ------------------------------------------------------------------------------------------------

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mssql",
});

const Company = CompanyModel(sequelize);
const Vehicle = VehicleModel(sequelize);
const VehicleType = VehicleTypeModel(sequelize);
const Driver = DriverModel(sequelize);
const Scheduler = SchedulerModel(sequelize);
const SchedulerDetail = SchedulerDetailModel(sequelize);
const Station = StationModel(sequelize);
const Customer = CustomerModel(sequelize);
const Booking = BookingModel(sequelize);

// ----------------------------------------------------------------

// Relationship of company and vehicle
Company.hasMany(Vehicle, {
  foreignKey: {
    name: "companyId",
    allowNull: false,
  },
});
Vehicle.belongsTo(Company, {
  foreignKey: "companyId",
});
// ----------------------------------------------------------------

// Relationship of vehicle and vehicle type
VehicleType.hasMany(Vehicle, {
  foreignKey: "vehicleTypeId",
});
Vehicle.belongsTo(VehicleType, {
  foreignKey: "vehicleTypeId",
});
// ----------------------------------------------------------------

// Relationship of driver and vehicle
Vehicle.hasOne(Driver, {
  foreignKey: {
    name: "vehicleId",
    unique: true,
  },
});
Driver.belongsTo(Vehicle, {
  foreignKey: "vehicleId",
});
// ----------------------------------------------------------------

// Relationship of Vehicle and scheduler
Vehicle.hasOne(Scheduler, {
  foreignKey: "vehicleId",
});
Scheduler.belongsTo(Vehicle, {
  foreignKey: "vehicleId",
});
// ----------------------------------------------------------------

// Relationship of scheduler and scheduler detail
Scheduler.hasMany(SchedulerDetail, {
  foreignKey: "schedulerId",
});
SchedulerDetail.belongsTo(Scheduler, {
  foreignKey: "schedulerId",
});
// ----------------------------------------------------------------

// Relationship of scheduler detail and station
Station.hasMany(SchedulerDetail, {
  foreignKey: "stationId",
});
SchedulerDetail.belongsTo(Station, {
  foreignKey: "stationId",
});
// ----------------------------------------------------------------

// Relationship of booking and customer
Customer.hasMany(Booking, {
  foreignKey: "customerId",
});
Booking.belongsTo(Customer, {
  foreignKey: "customerId",
});

// Relationship of booking and vehicle
Vehicle.hasMany(Booking, {
  foreignKey: "vehicleId",
});
Booking.belongsTo(Vehicle, {
  foreignKey: "vehicleId",
});

// Relationship of booking and company
Company.hasMany(Booking, {
  foreignKey: "companyId",
});
Booking.belongsTo(Company, {
  foreignKey: "companyId",
});

module.exports = {
  sequelize,
  Company,
  Vehicle,
  VehicleType,
  Driver,
  Scheduler,
  SchedulerDetail,
  Station,
  Booking,
  Vehicle,
};
