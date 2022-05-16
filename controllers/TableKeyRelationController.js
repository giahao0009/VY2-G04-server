const { sequelize, TableKeyRelation } = require("../models");

class TableKeyRelationController {
  // [GET] /api/keyrelation/getall
  getAll = async (req, res) => {
    try {
      const data = await TableKeyRelation.findAll();
      console.log(data);
      res.json({ status: 201, data: data });
    } catch (err) {
      console.log(err);
      res.json({ status: 501, message: err.message });
    }
  };

  createKeyword = async (req, res) => {
    try {
      let data = {
        keyRelation: req.body.keyRelation,
        stationId: req.body.stationId,
      };
      const key = await TableKeyRelation.create(data);
      res.json({ status: 201, message: "Thực hiện thành công" });
    } catch (err) {
      console.log(err);
      res.json({ status: 501, message: err.message });
    }
  };
}

module.exports = new TableKeyRelationController();
