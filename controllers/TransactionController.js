const res = require("express/lib/response");
const { sequelize, Transaction, Vehicle, User } = require("../models");
const { calculateTotalCost } = require("../ultils");

class TransactionController {
  // [POST] /api/transaction/createtransaction
  createTransaction = async (req, res) => {
    try {
      let users = await User.findAll({
        where: { userId: req.params.customerId },
      });
      if (!user) {
        res.json({
          status: 401,
          message: "Không có bất kỳ user nào để tạo transaction",
        });
      }
      let totalCost = calculateTotalCost(req.body.numberPeoples, 1400);
      let vehicle = Vehicle.findById(req.params.vehicleId);
      let data = {
        customerId: req.body.customerId,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        fromAddress: req.body.fromAddress,
        toAddress: req.body.toAddress,
        totalCost: totalCost,
        vehicle: vehicle,
        unitCost: 100000,
        transactionStatus: req.body.bookingStatus,
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

  // [PUT] /api/transactions/refund/:id
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
}

module.exports = new TransactionController();
