const { sequelize, Booking } = require("../models");

class BookingController {
  // [POST] /api/booking/bookvehicle
  bookVehicle = (req, res) => {
    try {
      const data = {
        toAddress: req.body.toAddress,
        fromAddress: req.body.fromAddress,
        pickupDate: req.body.pickupDate,
        customerId: req.body.customerId,
        vehicleId: req.body.vehicleId,
        bookingStatus: req.body.bookingStatus,
        numberPeoples: req.body.numberPeoples,
      };

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // [DELETE] /api/booking/cancelBooking
  cancelBooking = (req, res) => {};
}

module.exports = new BookingController();
