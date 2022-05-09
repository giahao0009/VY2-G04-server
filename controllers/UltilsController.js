const stripe = require("stripe")(process.env.SECRET_KEY_STRIPE);
const { calculateOrderAmount } = require("../ultils");

class UltisController {
  // [POST] /api/ultils/payment-stripe
  // Tạo payment intent
  createPaymentIntent = async (req, res) => {
    const { items } = req.body;
    // Tạo payment intent với số tiền đặt và đơn vị tiền tệ
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: "haodeptrai55@gmail.com",
    });
    console.log(paymentIntent.client_secret);
    // console.log(paymentIntent.clientSecret);
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  };
}

module.exports = new UltisController();
