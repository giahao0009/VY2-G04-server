// Thay thế hằng số bên dưới để tính giá 1 người đi
// Dùng để tính tổng đơn hàng ở phía server
// Tránh trường hợp phía client thao túng tiền
const calculateOrderAmount = (items) => {
  return 100000;
};

const chargeCustomer = async (customerId) => {
  // Lookup the payment methods available for the customer
  const paymentMethods = await stripe.paymentMethods.list({
    customer: customerId,
    type: "card",
  });
  try {
    // Charge the customer and payment method immediately
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "eur",
      customer: customerId,
      payment_method: paymentMethods.data[0].id,
      off_session: true,
      confirm: true,
    });
  } catch (err) {
    // Error code will be authentication_required if authentication is needed
    console.log("Error code is: ", err.code);
    const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(
      err.raw.payment_intent.id
    );
    console.log("PI retrieved: ", paymentIntentRetrieved.id);
  }
};

const calculateTotalCost = (numberPeople, unitCost) => {
  return numberPeople * unitCost;
};

module.exports = { calculateOrderAmount, chargeCustomer, calculateTotalCost };
