const { Company } = require("../models");

class CompanyController {
  // [GET] /api/company/getallcompany
  getAllCompany = async (req, res) => {
    try {
      const data = await Company.findAll();
      res.json({
        status: 201,
        data: data,
      });
    } catch (e) {
      res.json({
        status: 404,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [POST] /api/company/createcompany
  createCompany = async (req, res) => {
    try {
      let data = {
        companyName: req.body.companyName,
        companyEmail: req.body.companyEmail,
        companyPhone: req.body.companyPhone,
        companyAddress: req.body.companyAddress,
        founderFirstName: req.body.founderFirstName,
        founderLastName: req.body.founderLastName,
        founderPhone: req.body.founderPhone,
        founderEmail: req.body.founderEmail,
      };
      const company = await Company.create(data);
      res.json({
        status: 201,
        message: "Thực hiện thành công",
        data: company,
      });
    } catch (err) {
      res.json({
        status: 404,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };

  // [GET] /api/company/getcompanybyid?companyid=...
  getCompanyById = async (req, res) => {
    try {
      const company = await Company.findOne({
        where: { companyId: req.query.companyid },
      });
      res.json({ status: 201, data: company });
    } catch (err) {
      res.json({
        status: 404,
        message: "Thực hiện không thành công",
        error: e,
      });
    }
  };
}

module.exports = new CompanyController();
