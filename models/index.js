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
const VehicleStatusModel = require("./VehicleStatus");
const UserModel = require("./User");
const TableKeyRelationModel = require("./TableKeyRelation");
const TransactionModel = require("./Transaction");
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
const VehicleStatus = VehicleStatusModel(sequelize);
const User = UserModel(sequelize);
const TableKeyRelation = TableKeyRelationModel(sequelize);
const Transaction = TransactionModel(sequelize);

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
  foreignKey: {
    name: "customerId",
    allowNull: false,
  },
});
Booking.belongsTo(Customer, {
  foreignKey: {
    name: "customerId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

// Relationship of booking and vehicle
Vehicle.hasMany(Booking, {
  foreignKey: {
    name: "vehicleId",
    allowNull: false,
  },
});
Booking.belongsTo(Vehicle, {
  foreignKey: {
    name: "vehicleId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

// Relationship of company and station
Company.hasMany(Station, {
  foreignKey: {
    name: "companyId",
    allowNull: false,
  },
});

Station.belongsTo(Company, {
  foreignKey: {
    name: "companyId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

// Relationship of VehicleStatus and Vehicle
VehicleStatus.hasMany(Vehicle, {
  foreignKey: {
    name: "vehicleStatusId",
    allowNull: false,
  },
});
Vehicle.belongsTo(VehicleStatus, {
  foreignKey: {
    name: "vehicleStatusId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

// Relationship of User and Company
User.hasMany(Company, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
Company.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

// Relationship of TableKeyRelation and Station
Station.hasMany(TableKeyRelation, {
  foreignKey: {
    name: "stationId",
    allowNull: false,
  },
});
TableKeyRelation.belongsTo(Station, {
  foreignKey: {
    name: "stationId",
    allowNull: false,
  },
});
// ----------------------------------------------------------------

module.exports = {
  sequelize,
  Company,
  Vehicle,
  VehicleType,
  VehicleStatus,
  Driver,
  Scheduler,
  SchedulerDetail,
  Station,
  Booking,
  Customer,
  User,
  TableKeyRelation,
  Transaction,
};
