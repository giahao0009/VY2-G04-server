const { sequelize, Driver } = require("../models");
const { Op } = require("sequelize");

class DriverController {
  // [POST] /api/driver/createdriver
  createDriver = async (req, res) => {
    try {
      let data = {
        driverFirstName: req.body.driverFirstName,
        driverLastName: req.body.driverLastName,
        driverBirthDay: req.body.driverBirthDay,
        driverPhone: req.body.driverPhone,
        driverAddress: req.body.driverAddress,
        vehicleId: req.body.vehicleId,
      };
      const driver = await Driver.create(data);
      res.json({ status: 201, message: "Thực hiện thành công", data: driver });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET] /api/driver/getalldriver
  getAllDriver = async (req, res) => {
    try {
      const data = await Driver.findAll();
      res.json({ status: 201, data: data });
    } catch (e) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [GET] /api/driver/getdriverbyid/:id
  getDriverById = async (req, res) => {
    try {
      const data = await Driver.findOne({
        where: { driverId: req.params.id },
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

  // [DELETE] /api/driver/deletedriver/:id
  deleteDriver = async (req, res) => {
    try {
      await Driver.destroy({
        where: { driverId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công" });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công" });
    }
  };

  // [PUT] /api/driver/updatedriver/:id
  updateDriver = async (req, res) => {
    console.log(req.params.id);
    try {
      let data = {
        driverId: req.body.driverId,
        driverFirstName: req.body.driverFirstName,
        driverLastName: req.body.driverLastName,
        driverBirthDay: req.body.driverBirthDay,
        driverPhone: req.body.driverPhone,
        driverAddress: req.body.driverAddress,
        vehicleId: req.body.vehicleId,
      };
      const driver = await Driver.update(data, {
        where: { driverId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: driver });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công", err: e });
    }
  };

  // [GET] /api/driver/getalldriverpagination?
  getAllDriverWithPagination = async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(
        `EXEC [usp_driverPagination] @page = ${req.query.page}, @size = ${req.query.size}, @companyId = '${req.query.companyId}'`
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

  // [GET] /api/countdriver?companyid=...
  countDriver = async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(
        `EXEC [usp_countDriver] @companyId = '${req.query.companyId}'`
      );
      console.log(results);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: results,
      });
    } catch (e) {
      console.log(e);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [GET] /api/searchdriver?name=...
  searchDriver = async (req, res) => {
    try {
      const data = await Driver.findAll({
        where: {
          [Op.or]: [
            {
              driverFirstName: {
                [Op.like]: `%${req.query.name}%`,
              },
            },
            {
              driverLastName: {
                [Op.like]: `%${req.query.name}%`,
              },
            },
          ],
        },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: data });
    } catch (e) {
      console.log(e);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };
}

module.exports = new DriverController();
