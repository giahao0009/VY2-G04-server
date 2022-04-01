const {connect, sql} = require('../database/connect');
const {querysCompany} = require('../database/query');

class CompanyController {
    // [GET] /api/company/getallcompany
    getAllCompany = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysCompany.getAllCompany;
            return await pool.request().query(sqlString, (err, data) => {
                res.json(data.recordset);
            });
        } catch (err) {
            res.json(err);
        }
    }

    // [GET] /api/company/:id
    getCompanyWithId = async (req, res, next) => {
        try{
            let pool = await connect;
            let sqlString = querysCompany.getCompanyWithId;
            return company = await pool.request().input('input_parameter', sql.VarChar, req.params.id).query(sqlString, (err, data) => {
                res.json(data.recordset);
            });
        }catch (err) {
            console.log(err);
        }
    }

    // [POST] /api/company/createCompany
    createCompany = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysCompany.createCompany;
            return await pool.request()
            .input('id', sql.VarChar, req.body.Id)
            .input('name', sql.NVarChar, req.body.Name)
            .input('email', sql.VarChar, req.body.Email)
            .input('phone', sql.VarChar, req.body.Phone)
            .input('address', sql.NVarChar, req.body.Address)
            .query(sqlString, (err, data) => {
                if(err) {
                    res.json({status: 0, message: "Thông tin có trùng lặp, mời bạn nhập lại"});
                    return;
                }
                res.json({status: 1, message: "Nhập thông tin thành công" , data: data})
            });  
        }catch (err) {
            console.log(err);
        }
    }

    // [PUT] /api/company/updatecompany
    updateCompany = async (req, res) => {
        try{
            let pool = await connect;
            let sqlString = querysCompany.updateCompany;
            return await pool.request()
            .input('id', sql.VarChar, req.body.Id)
            .input('name', sql.NVarChar, req.body.Name)
            .input('email', sql.VarChar, req.body.Email)
            .input('phone', sql.VarChar, req.body.Phone)
            .input('address', sql.NVarChar, req.body.Address)
            .query(sqlString, (err, data) => {
                if(err) {
                    res.json({status: 0, message: "Không thể sửa được thông tin"});
                    return;
                }
                res.json({status: 1, message: "Cập nhật thông tin thành công" , data: data})
            });
        }catch (err) {
            console.log(err);
        }
    }

    // [DELETE] /api/company/deletecompany/:id
    deleteCompany = async (req, res) => {
        try{
            let id = req.params.id;
            let pool = await connect;
            let sqlString = querysCompany.deleteCompany;
            return await pool.request()
            .input('id', sql.VarChar, id)            
            .query(sqlString, (err, data) => {
                if(err) {
                    res.json({status: 0, message: "Không thể xoá thông tin của công ty"});
                    return;
                }
                res.json({status: 1, message: "Xoá thành công thông tin công ty" , data: data})
            });
        }catch (err) {
            console.log(err);
        }
    }

}

module.exports = new CompanyController();
