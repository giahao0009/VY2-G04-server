function CompanyQuery() {
  this.getAllCompany = "SELECT * FROM tblCompany";
  this.getCompanyById = "SELECT * FROM tblCompany WHERE Id = @id";
  this.createCompany =
    "INSERT INTO tblCompany (Name, Email, Phone, Address) VALUES (@Name, @Email, @Phone, @Address)";
  this.updateCompany =
    "UPDATE tblCompany SET Name = @Name, Email = @Email, Phone = @Phone, Address = @Address WHERE Id = @i d";
  this.deleteCompany = "DELETE FROM tblCompany WHERE Id = @id";
}

function CarQuery() {
  this.getAllCar = "SELECT * FROM tblCar";
  this.getCarById = "SELECT * FROM tblCar WHERE Id = @id";
  this.createCar =
    "INSERT INTO tblCar (CarNumber, IdCarType, CarBranch, IdCompany, NumberSeat) VALUES (@CarNumber, @IdCarType, @CarBranch, @IdCompany, @NumberSeat)";
  this.updateCar =
    "UPDATE tblCar SET CarNumber = @CarNumber, CarBranch = @CarBranch, NumberSeat = @NumberSeat WHERE Id = @id";
  this.deleteCar = "DELETE FROM tblCar WHERE Id = @id";
}

function TypeCarQuery() {
  this.getAllType = "SELECT * FROM tblTypeCar";
  this.getTypeById = "SELECT * FROM tblTypeCar WHERE Id = @id";
}

function DriverQuery() {
  this.getAllDriver = "SELECT * FROM tblDriver";
  this.getDriverById = "SELECT * FROM tblDriver WHERE Id = @id";
  this.createDriver =
    "INSERT INTO tblDriver (Name, BirthDay, Phone, Address, IdCar) VALUES (@name, @birthday, @phone, @address, @idCar)";
  this.updateDriver =
    "UPDATE tblDriver SET Name = @name, BirthDay = @birthday, Phone = @phone, Address = @address, IdCar = @idCar WHERE Id = @id ";
  this.deleteDriver = "DELETE FROM tblDriver WHERE Id = @id";
}

module.exports = {
  CompanyQuery: new CompanyQuery(),
  CarQuery: new CarQuery(),
  TypeCarQuery: new TypeCarQuery(),
  DriverQuery: new DriverQuery(),
};
