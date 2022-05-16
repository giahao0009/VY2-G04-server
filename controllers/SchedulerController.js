const { sequelize, Scheduler, Vehicle } = require("../models");
const { Op } = require("sequelize");

class SchedulerController {
  createScheduler = async (req, res) => {
    try {
      let data = {
        vehicleId: req.body.vehicleId,
        schedulerStart: req.body.schedulerStart,
        schedulerEnd: req.body.schedulerEnd,
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
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  getAllSchedulerByCompany = async (req, res) => {
    try {
      const data = await Scheduler.findAll({
        where: { companyId: req.query.companyId },
      });
      res.json({ status: 201, data: data });
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
}

module.exports = new SchedulerController();
