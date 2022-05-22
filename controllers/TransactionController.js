const res = require("express/lib/response");
const { sequelize, Transaction, Vehicle, User } = require("../models");
const { calculateTotalCost } = require("../ultils");

class TransactionController {
  // [POST] /api/transaction/createtransaction
  createTransaction = async (req, res) => {
    try {
      let totalCost = calculateTotalCost(req.body.numberPeoples, 1400);
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
        unitCost: "1400",
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
}

module.exports = new TransactionController();
