const {
  sequelize,
  Scheduler,
  Vehicle,
  Company,
  SchedulerDetail,
} = require("../models");
const { Op } = require("sequelize");

class SchedulerController {
  // [POST]
  createScheduler = async (req, res) => {
    try {
      let data = {
        vehicleId: req.body.vehicleId,
        schedulerStart: req.body.schedulerStart,
        schedulerEnd: req.body.schedulerEnd,
        companyId: req.body.companyId,
        carNumber: req.body.carNumber,
        startAddress: req.body.startAddress,
        endAddress: req.body.endAddress,
      };
      const scheduler = await Scheduler.create(data);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: scheduler,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [POST]
  createDetailScheduler = async (req, res) => {
    try {
      const data = {
        schedulerId: req.body.schedulerId,
        stationId: req.body.stationId,
        indexDetail: req.body.indexDetail,
        keyWord: req.body.keyWord,
      };
      console.log(req.body);
      const schedulerDetail = await SchedulerDetail.create(data);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: schedulerDetail,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  getAllSchedulerByCompany = async (req, res) => {
    try {
      const scheduler = await Scheduler.findAll({
        where: { companyId: req.query.companyId },
      });
      res.json({ status: 201, data: scheduler });
    } catch (err) {
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  getAllScheduler = async (req, res) => {
    try {
      const data = await Scheduler.findAll();
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: scheduler,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  getSchedulerById = async (req, res) => {
    try {
      const data = await Scheduler.findOne({
        where: { schedulerId: req.query.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: data });
    } catch (err) {
      console.log(err);
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  getSchedulerByVehicleId = async (req, res) => {
    try {
      const data = await Scheduler.findAll({
        where: { vehicleId: req.query.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: data });
    } catch (err) {
      console.log(err);
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET]
  getDetail = async (req, res) => {
    try {
      const data = await SchedulerDetail.findAll({
        where: { schedulerId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: data });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET]
  filterScheduler = async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(
        `EXEC [usp_filterScheduler] @keyRelation = '${req.query.key}'`
      );
      res.json({ status: 201, message: "Thực hiện thành công", data: results });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };
  // [GET]
  // /api/scheduler/search?carnumber=...&companyId=...
  searchScheduler = async (req, res) => {
    try {
      const data = await Scheduler.findAll({
        where: {
          carNumber: req.query.carnumber,
          companyId: req.query.companyId,
        },
      });
      res.json({ status: 200, message: "Thực hiện thành công", data: data });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };
}

module.exports = new SchedulerController();
