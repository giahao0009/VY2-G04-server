const { sequelize, SchedulerDetail } = require("../models");

class SchedulerDetailController {
  // [POST] /api/schedulerdetail/createschedulerdetail
  createSchedulerDetail = async (req, res) => {
    try {
      let data = {
        schedulerId: req.body.schedulerId,
        stationId: req.body.stationId,
      };
      const schedulerDetail = await SchedulerDetail.create(data);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: schedulerDetail,
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

  // [GET] /api/schedulerdetail/getallschedulerdetail
  getAllSchedulerDetailBySchedulerId = async (req, res) => {
    try {
      const data = await SchedulerDetail.findAll({
        where: { schedulerId: req.query.schedulerId },
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

module.exports = new SchedulerDetailController();
