const { sequelize, Booking } = require("../models");

class BookingController {
  // [POST] /api/booking/bookvehicle
  bookVehicle = async (req, res) => {
    try {
      const data = {
        toAddress: req.body.toAddress,
        fromAddress: req.body.fromAddress,
        pickupDate: req.body.pickupDate,
        customerId: req.body.customerId,
        vehicleId: req.body.vehicleId,
        bookingStatus: req.body.bookingStatus,
        numberPeoples: req.body.numberPeoples,
        time: req.body.time,
        user: req.body.user,
      };

      const result = await Booking.create(data);
      console.log(result);
      res.json({ data: result });
    } catch (err) {
      console.log(err);
    }
  };

  // [DELETE] /api/booking/cancelBooking
  cancelBooking = (req, res) => {};
}

module.exports = new BookingController();
