const { sequelize, Vehicle } = require("../models");
const { Op } = require("sequelize");

class VehicleController {
  // [POST] /api/vehicle/createvehicle
  createVehicle = async (req, res) => {
    try {
      let data = {
        vehicleNumber: req.body.vehicleNumber,
        vehicleBrand: req.body.vehicleBrand,
        vehicleStatusId: req.body.vehicleStatusId,
        companyId: req.body.companyId,
        vehicleTypeId: req.body.vehicleTypeId,
        vehicleSeatNumber: req.body.vehicleSeatNumber,
      };
      const vehicle = await Vehicle.create(data);
      res.json({ status: 201, message: "Thực hiện thành công", data: vehicle });
    } catch (err) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        err: err,
      });
    }
  };

  // [GET] /api/vehicle/getallvehicle
  getAllVehicle = async (req, res) => {
    try {
      const data = await Vehicle.findAll();
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

  // [GET] /api/vehicle/getvehiclebyid/:id
  getVehicleById = async (req, res) => {
    try {
      const data = await Vehicle.findOne({
        where: { vehicleId: req.params.id },
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

  // [DELETE] /api/vehicle/deletevehicle/:id
  deleteVehicle = async (req, res) => {
    try {
      await Vehicle.destroy({
        where: { vehicleId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công" });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công" });
    }
  };

  // [PUT] /api/vehicle/updatevehicle/:id
  updateVehicle = async (req, res) => {
    try {
      let data = {
        vehicleId: req.params.vehicleId,
        vehicleNumber: req.body.vehicleNumber,
        vehicleBrand: req.body.vehicleBrand,
        vehicleStatus: req.body.vehicleStatus,
        companyId: req.body.companyId,
        vehicleTypeId: req.body.vehicleTypeId,
        vehicleSeatNumber: req.body.vehicleSeatNumber,
      };
      const vehicle = await Vehicle.update(data, {
        where: { vehicleId: req.params.id },
      });
      res.json({ status: 201, message: "Thực hiện thành công", data: vehicle });
    } catch (e) {
      res.json({ status: 401, message: "Thực hiện không thành công", err: e });
    }
  };

  // [GET] /api/vehicle/getallvehiclepagination?
  getAllVehicleWithPagination = async (req, res) => {
    try {
      const [results, metadata] = await sequelize.query(
        `EXEC [usp_vehiclePagination] @page = ${req.query.page}, @size = ${req.query.size}`
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
        if (item.companyId == req.query.companyid) {
          dataArr.push(item);
        }
      });

      res.json({ status: 201, data: dataArr, Total: total });
    } catch (e) {
      res.json({
        status: 401,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [get] /api/vehicle/search?vehiclenumber=...&page=...
  searchVehicle = async (req, res) => {
    try {
      const data = await Vehicle.findAll({
        where: {
          vehicleNumber: {
            [Op.like]: `%${req.query.vehiclenumber}%`,
          },
        },
      });
      res.json({ data });
    } catch (e) {
      console.log(e);
    }
  };

  // [GET] /api/vehicle/filtervehicle
  filterVehicle = async (req, res) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = new VehicleController();