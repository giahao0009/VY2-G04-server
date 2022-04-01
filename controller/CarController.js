const {connect, sql} = require('../database/connect');
const {querysCar} = require('../database/query');

class CarController {
    // [GET] /api/car/getallcar
    getAllCar = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysCar.getAllCar;
            return await pool.request().query(sqlString, (err, data) => {
                if(!err){ 
                    res.json({status: 1, data: data.recordset});
                }else{
                    res.json({status: 0, message: "Không đọc được danh sách xe", error: err.message});
                }
            });
        }catch (err) {  
            console.log(err);
        }
    }

    // [GET] /api/car/:id
    getCarById = async (req, res) => {
        try{
            let id = req.params.id;
            let pool =  await connect;
            let sqlString = querysCar.getCarById;
            return await pool.request().input('id', sql.VarChar, id).query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, data: data.recordset});
                }else{
                    res.json({status: 0, message: "Không thể tìm kiếm được", error: err.message});
                }
            })
        }catch (err) {
            console.log(err);
        }
    }

    // [POST] /api/car/createcar
    createCar = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysCar.createCar;
            return await pool.request()
            .input('id', sql.VarChar, req.body.Id)
            .input('carNumber', sql.VarChar, req.body.CarNumber)
            .input('idCarType', sql.VarChar, req.body.IdCarType)
            .input('carBranch', sql.NVarChar, req.body.CarBranch)
            .input('idCompany', sql.VarChar, req.body.IdCompany)
            .input('numberSeat', sql.Int, req.body.NumberSeat)
            .query(sqlString, (err, data) => {
                if(!err) {
                    res.json({status: 1, message: "Thêm thông tin thành công", data: data});
                }else{
                    res.json({status: 0, message: "Thêm thông tin thất bại", error: err.message});
                }
            });
        }catch (err) {
            console.log(err);
        }
    }

    // [PUT] /api/car/updatecar
    updateCar = async (req, res) => {
        try{
            let id = req.params.id;
            let pool = await connect;
            let sqlString = querysCar.updateCar;
            return await pool.request()
            .input('id', sql.VarChar, id)
            .input('carNumber', sql.VarChar, req.body.CarNumber)
            .input('idCarType', sql.VarChar, req.body.IdCarType)
            .input('carBranch', sql.NVarChar, req.body.CarBranch)
            .input('numberSeat', sql.Int, req.body.NumberSeat)
            .query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, message: "Cập nhật thông tin thành công", data: data});
                }else{
                    res.json({status: 0, message: "Cập nhật thông tin thất bại", error: err.message});
                }
            })
        }catch (err) {
            console.log(err);
        }
    }

    // [DELETE] /api/car/deletecar/:id
    deleteCar = async (req, res) => {
        try{
            let id = req.params.id;
            let pool = await connect;
            let sqlString = querysCar.deleteCar;
            return await pool.request()
            .input('id', sql.VarChar, id)
            .query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, message: "Xoá thông tin thành công", data: data});
                }else{
                    res.json({status: 0, message: "Xoá thông tin thất bại"})
                }
            })
        }catch (err) {
            console.log(err);
        }
    }

}

module.exports = new CarController();
