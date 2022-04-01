const {connect, sql} = require('../database/connect');
const {querysTypeCar} = require('../database/query');

class TypeCarController {
    // [GET] /api/typecar/getalltype
    getAllType = async (req, res) => {
        // let knex = require('knex')({
        //     client: 'mssql',
        //     connection: {
        //         server: 'localhost',
        //         user: 'sa',
        //         password: '1234',
        //         database: 'VY2G04'
        //     }
        // });
        // await knex.select('*').from('tblTypeCar')
        // .then((data) => {
        //     console.log(data);
        // }).catch((err) => {
        //     console.log(err);
        // }).finally(() => {
        //     knex.destroy();
        // })
        try{
            let pool = await connect;
            let sqlString = querysTypeCar.getAllType;
            return await pool.request().query(sqlString, (err, data) => {
                if(!err){
                    res.json({status: 1, data: data.recordset});
                }else{
                    res.json({status: 0, message: "Không thể đọc dữ liệu", error: err.message});
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    

}

module.exports = new TypeCarController();