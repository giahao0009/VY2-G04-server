// Thay thế hằng số bên dưới để tính giá 1 người đi
// Dùng để tính tổng đơn hàng ở phía server
// Tránh trường hợp phía client thao túng tiền
const calculateOrderAmount = (items) => {
  return 1400;
};

module.exports = { calculateOrderAmount };
