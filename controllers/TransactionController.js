const res = require("express/lib/response");
const { sequelize, Transaction, Vehicle, User } = require("../models");
const { calculateTotalCost } = require("../ultils");

class TransactionController {
  // [POST] /api/transaction/createtransaction
  createTransaction = async (req, res) => {
    try {
      let totalCost = calculateTotalCost(req.body.numberPeoples, 100000);
      let vehicle = await Vehicle.findOne({
        where: { vehicleId: req.body.vehicleId },
      });

      let data = {
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        fromAddress: req.body.fromAddress,
        toAddress: req.body.toAddress,
        totalCost: totalCost.toString(),
        vehicle: vehicle.dataValues.vehicleNumber,
        unitCost: "100000",
        transactionStatus: req.body.transactionStatus,
        companyId: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
      };

      const transaction = await Transaction.create(data);
      res.json({
        status: 201,
        message: "Lưu thông tin thanh toán thành công",
        data: transaction,
      });
    } catch (e) {
      console.log(e);
      res.json({ status: 501, message: "Thực hiện không thành công" });
    }
  };

  // [GET] /api/transaction/getalltransaction
  getAllTransaction = async (req, res) => {
    try {
      const transactions = await Transaction.findAll();
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: transactions,
      });
    } catch (e) {
      console.log(e);
      res.json({ status: 501, message: "Thực hiện không thành công" });
    }
  };

  // [GET] /api/transaction/gettransactionbycomid
  getAllTransactionByComId = async (req, res) => {
    try {
      console.log(req.params.id);
      const transactions = await Transaction.findAll({
        where: { companyId: req.params.id },
      });
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: transactions,
      });
    } catch (err) {
      console.log(err);
      res.json({ status: 501, message: "Thực hiện không thành công" });
    }
  };

  // [GET] /api/transaction/
  getAllTransactionByCusId = async (req, res) => {
    try {
      const transactions = await Transaction.findAll({
        where: { customerId: req.query.customerId },
      });
      res.json({ status: 201, data: transactions });
    } catch (e) {
      console.log(e);
      res.json({
        status: 501,
        message: "Transaction not found",
        error: e.message,
      });
    }
  };

  // [PUT] /api/transaction/refund/:id
  refundTransaction = async (req, res) => {
    try {
      let data = {
        transactionStatus: "Hoàn tiền",
      };
      await Transaction.update(data, {
        where: { transactionId: req.params.id },
      });
      res.json({ status: 201, message: "Đã hoàn tiền thành công" });
    } catch (e) {
      console.log(e);
      res.json({
        status: 501,
        message: "Transaction not found",
        error: e.message,
      });
    }
  };

  // [GET] /api/transaction/gettransactionbyid/:id
  getTransactionById = async (req, res) => {
    try {
      const transaction = await Transaction.findOne({
        where: { transactionId: req.params.id },
      });
      console.log(transaction.dataValues);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: transaction,
      });
    } catch (err) {
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        error: err.message,
      });
    }
  };

  // [GET] /api/transaction/counttransaction?companyId=...
  countTransaction = async (req, res) => {
    try {
      const count = await Transaction.count({
        where: { companyId: req.query.companyId },
      });
      console.log(count);
      res.json({ status: 201, message: "Thực hiện thành công", data: count });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        error: err.message,
      });
    }
  };

  // [GET] /api/transaction/sumcosttransaction?companyId=...
  sumTransaction = async (req, res) => {
    try {
      const transactions = await Transaction.findAll({
        where: { companyId: req.query.companyId },
      });
      let sum = 0;
      transactions.forEach((item, index) => {
        let cost = Number(item.totalCost);
        sum += cost;
      });
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: sum,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: 501,
        message: "Thực hiện không thành công",
        error: err,
      });
    }
  };

  // [GET] /api/transaction/report
  report = async (req, res) => {
    try {
      const [result1, metadata1] = await sequelize.query(
        `exec [usp_reportMonth] @month='01', @companyId = '${req.query.companyId}'`
      );
      const [result2, metadata2] = await sequelize.query(
        `exec [usp_reportMonth] @month='02', @companyId = '${req.query.companyId}'`
      );
      const [result3, metadata3] = await sequelize.query(
        `exec [usp_reportMonth] @month='03', @companyId = '${req.query.companyId}'`
      );
      const [result4, metadata4] = await sequelize.query(
        `exec [usp_reportMonth] @month='04', @companyId = '${req.query.companyId}'`
      );
      const [result5, metadata5] = await sequelize.query(
        `exec [usp_reportMonth] @month='05', @companyId = '${req.query.companyId}'`
      );
      const [result6, metadata6] = await sequelize.query(
        `exec [usp_reportMonth] @month='06', @companyId = '${req.query.companyId}'`
      );
      const [result7, metadata7] = await sequelize.query(
        `exec [usp_reportMonth] @month='07', @companyId = '${req.query.companyId}'`
      );
      const [result8, metadata8] = await sequelize.query(
        `exec [usp_reportMonth] @month='08', @companyId = '${req.query.companyId}'`
      );
      const [result9, metadata9] = await sequelize.query(
        `exec [usp_reportMonth] @month='09', @companyId = '${req.query.companyId}'`
      );
      const [result10, metadata10] = await sequelize.query(
        `exec [usp_reportMonth] @month='10', @companyId = '${req.query.companyId}'`
      );
      const [result11, metadata11] = await sequelize.query(
        `exec [usp_reportMonth] @month='11', @companyId = '${req.query.companyId}'`
      );
      const [result12, metadata12] = await sequelize.query(
        `exec [usp_reportMonth] @month='12', @companyId = '${req.query.companyId}'`
      );

      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: [
          {
            month: 1,
            total: result1[0].total,
          },
          {
            month: 2,
            total: result2[0].total,
          },
          {
            month: 3,
            total: result3[0].total,
          },
          {
            month: 4,
            total: result4[0].total,
          },
          {
            month: 5,
            total: result5[0].total,
          },
          {
            month: 6,
            total: result6[0].total,
          },
          {
            month: 7,
            total: result7[0].total,
          },
          {
            month: 8,
            total: result8[0].total,
          },
          {
            month: 9,
            total: result9[0].total,
          },
          {
            month: 10,
            total: result10[0].total,
          },
          {
            month: 11,
            total: result11[0].total,
          },
          {
            month: 12,
            total: result12[0].total,
          },
        ],
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
}

module.exports = new TransactionController();
