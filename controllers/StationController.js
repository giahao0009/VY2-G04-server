const { sequelize, Station } = require("../models");
const { Op } = require("sequelize");

class StationController {
  // [POST] /api/station/createstation
  createStation = async (req, res) => {
    try {
      let data = {
        stationName: req.body.stationName,
        stationLocation: req.body.stationLocation,
        companyId: req.body.companyId,
      };
      const station = await Station.create(data);
      res.json({ status: 201, message: "Thực hiện thành công", data: station });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET] /api/station/getallstation
  getAllStation = async (req, res) => {
    try {
      const data = await Station.findAll();
      console.log(data);
      res.json({ status: 201, data: data });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET] /api/station/:id
  getStationById = async (req, res) => {
    try {
      const data = await Station.findOne({
        where: { stationId: req.params.id },
      });
      res.json({ status: 201, data: data });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [DELETE] /api/station/deletestation/:id
  deleteStation = async (req, res) => {
    try {
      await Station.destroy({
        where: { stationId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công" });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công" });
    }
  };

  // [PUT] /api/station/updatestation/:id
  updateStation = async (req, res) => {
    try {
      let data = {
        stationName: req.body.stationName,
        stationLocation: req.body.stationLocation,
      };
      const station = await Station.update(data, {
        where: { stationId: req.params.id },
      });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công" });
    }
  };

  // [GET] /api/station/getallstationpagination?
  getAllStationWithPagination = async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(
        `EXEC [usp_stationPagination] @page = ${req.query.page}, @size = ${req.query.size}`
      );

      let total;
      for (let i = 0; i < results.length; ++i) {
        if ("Total" in results[i]) {
          total = results[i].Total;
        }
      }
      const dataArr = [];
      const data = results.forEach((item) => {
        if ("Total" in item) {
          return;
        }
        dataArr.push(item);
      });

      console.log(data);

      res.json({ status: 201, data: dataArr, Total: total });
    } catch (e) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [GET] /api/station/search
  searchStation = async (req, res) => {
    try {
      const data = await Station.findAll({
        where: {
          stationName: {
            [Op.like]: `%${req.query.stationname}%`,
          },
        },
      });
      res.json({ data });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };
}

module.exports = new StationController();
