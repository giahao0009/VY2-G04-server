const querysCompany = {
    getAllCompany: "SELECT * FROM tblCompany",
    getCompanyWithId: "SELECT * FROM tblCompany WHERE Id = @input_parameter",
    createCompany: "INSERT INTO tblCompany (Id, Name, Email, Phone, Address) VALUES(@id, @name, @email, @phone, @address)",
    updateCompany: "UPDATE tblCompany SET Name = @name, Email = @email, Phone = @phone, Address = @address WHERE Id = @id",
    deleteCompany: "DELETE FROM tblCompany WHERE Id = @id",
}

const querysCar = {
    getAllCar: "SELECT * FROM tblCar",
    getCarById: "SELECT * FROM tblCar WHERE Id = @id",
    createCar: "INSERT INTO tblCar (Id, CarNumber, IdCarType, CarBranch, IdCompany, NumberSeat) VALUES (@id, @carNumber, @idCarType, @carBranch, @idCompany, @numberSeat)",
    updateCar: "UPDATE tlbCar SET CarNumber = @CarNumber, IdCarType = @idCarType, CarBranch = @CarBranch, NumberSeat = @numberSeat WHERE Id = @id",
    deleteCar: "DELETE FROM tlbCar WHERE Id = @id",
}

const querysDriver = {
    getAllDriver: "SELECT * FROM tblDriver",
    getDriverById: "SELECT * FROM tblDriver WHERE Id = @id",
    createDriver: "INSERT INTO tblDriver (Id, Name, BirthDay, Phone, Address, IdCompany) VALUES (@id, @name, @birthDay, @phone, @address, @idCompany)",
    updateDriver: "UPDATE tblDriver SET Name = @name, BirthDay = @birthDay, Phone = @phone, Address = @address WHERE Id = @id",
    deleteDriver: "DELETE FROM tblDriver WHERE Id = @id",
}

const querysTypeCar = {
    getAllType: "SELECT * FROM tblTypeCar ORDER BY Id ASC",
    createType: "INSERT INTO tblTypeCar (Id, Name) VALUES (@id, @name)",
    deleteType: "DELETE FROM tblTypeCar WHERE Id = @id",
}

module.exports =  {
    querysCompany: querysCompany,
    querysCar: querysCar,
    querysDriver: querysDriver,
    querysTypeCar: querysTypeCar,
}
