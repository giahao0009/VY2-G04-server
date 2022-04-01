    const {connect, sql} = require('../database/connect');
const {querysDriver} = require('../database/query');

class DriverController {
    // [GET] /api/driver/getalldriver
    getAllDriver = async (req, res) => {
        try{            
            let pool = await connect;
            let sqlString = querysDriver.getAllDriver;
            return await pool.request().query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, data: data.recordset});
                }else{
                    res.json({status: 0, message: "Không thể đọc danh sách dữ liệu", error: err.message});
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    // [GET] /api/driver/:id
    getDriverById = async (req, res) => {
        try{
            let id = req.params.id;
            let pool = await connect;
            let sqlString = querysDriver.getDriverById;
            return await pool.request().input('id', sql.VarChar, id).query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, data: data.recordset});
                }else{
                    res.json({status: 0, message: "Không thể tìm kiếm được", error: err.message});
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    // [POST] /api/driver/createdriver
    createDriver = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysDriver.createDriver;
            return await pool.request()
            .input('id', sql.VarChar, req.body.Id)
            .input('name', sql.NVarChar, req.body.Name)
            .input('birthDay', sql.Date, req.body.BirthDay)
            .input('phone', sql.VarChar, req.body.Phone)
            .input('address', sql.NVarChar, req.body.Address)
            .input('idCompany', sql.VarChar, req.body.IdCompany)
            .query(sqlString, (err, data) => {
                if(!err) {
                    res.json({status: 1, message: "Thêm thông tin thành công", data: data});
                }else{
                    res.json({status: 0, message: "Thêm thông tin thất bại", error: err.message});
                }
            });
        }catch(err){
            console.log(err);
        }
    }

    // [PUT] /api/driver/updatecar
    updateDriver = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysDriver.updateDriver;
            return await pool.request()
            .input('id', sql.VarChar, req.body.Id)
            .input('name', sql.NVarChar, req.body.Name)
            .input('birthDay', sql.Date, req.body.BirthDay)
            .input('phone', sql.VarChar, req.body.Phone)
            .input('address', sql.NVarChar, req.body.Address)
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

    // [DELETE] /api/driver/deletedriver
    deleteDriver = async (req, res) => {
        try{
            let id = req.params.id;
            let pool = await connect;
            let sqlString = querysDriver.deleteDriver;
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

module.exports = new DriverController();
