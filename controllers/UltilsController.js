const stripe = require("stripe")(process.env.SECRET_KEY_STRIPE);
const { calculateOrderAmount } = require("../ultils");

class UltisController {
  // [POST] /api/ultils/refund
  refundCost = async (req, res) => {
    const refund = await stripe.refunds.create({
      charge: req.params.charge,
    });
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
