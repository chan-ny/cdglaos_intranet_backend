const Validator = require("./validators/index");
const RequestandResponse = require("./Request_Response/index");

module.exports = (app) => {
  // Province CTL
  app.post(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    RequestandResponse.Province.CreateProvince
  );
  app.put(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    RequestandResponse.Province.UpdateProvince
  );
  app.delete("/province/:Id", RequestandResponse.Province.RemoveProvince);
  app.get("/province", RequestandResponse.Province.AllProvince);
  app.get("/pv_select/:Id", RequestandResponse.Province.GetProvince);

  // District CTL
  app.post(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    RequestandResponse.District.CreateDistrict
  );
  app.put(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    RequestandResponse.District.UpdateDistrict
  );
  app.get("/district", RequestandResponse.District.AllDistrict);
  app.get("/district/:Id", RequestandResponse.District.GetDistrict);
  // Gender
  app.post("/gender", RequestandResponse.Gender.createGender);
  app.put("/gender", RequestandResponse.Gender.updateGender);
  app.put("/disable_gender/:Id", RequestandResponse.Gender.disableGender);
  app.get("/gender", RequestandResponse.Gender.getGender);

  //company
  app.post("/company", RequestandResponse.Company.CreateCompany);
  app.put("/company_img/:Id", RequestandResponse.Company.UpdateCompanyImage);
  app.put("/company", RequestandResponse.Company.UpdateCompanyText);
  app.get("/company_disaable/:Id", RequestandResponse.Company.DisableCompany);
  app.put("/company_renew/:Id", RequestandResponse.Company.RenewCompany);

  //chief Executive Officer
  app.post("/ceo", RequestandResponse.ChiefExecutiveOfficer.CreateCEO);
};
