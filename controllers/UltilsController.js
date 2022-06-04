const stripe = require("stripe")(process.env.SECRET_KEY_STRIPE);
const { calculateOrderAmount } = require("../ultils");
const { Transaction } = require("../models");

class UltisController {
  // [POST] /api/ultils/refund
  refundCost = async (req, res) => {
    try {
      const refund = await stripe.refunds.create({
        payment_intent: req.body.payment_intent,
      });
      const respond = await Transaction.update(
        { transactionStatus: "Đã hoàn tiền" },
        {
          where: {
            transactionId: req.body.transactionId,
          },
        }
      );

      res.json({
        status: 200,
        message: "Đã hoàn tiền thành công",
        refund: refund,
      });
    } catch (err) {
      console.log(err);
      res.json({ status: 500, message: "Thực hiện không thành công" });
    }
  };

  // [POST] /api/ultils/payment-stripe
  // Tạo payment intent
  createPaymentIntent = async (req, res) => {
    const { items, email } = req.body;
    // Tạo payment intent với số tiền đặt và đơn vị tiền tệ
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: email,
    });
    console.log(paymentIntent);
    // console.log(paymentIntent.clientSecret);
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  };
}

module.exports = new UltisController();
