const Validator = require("../validators/index");
const Views = require("../Views/index");

module.exports = (app) => {
  // User
  app.post("/register_user", Views.Users.RegisterUser);

  // Province CTL
  app.post(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    Views.Province.CreateProvince
  );
  app.put(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    Views.Province.UpdateProvince
  );
  app.delete("/province/:Id", Views.Province.RemoveProvince);
  app.get("/province", Views.Province.AllProvince);
  app.get("/pv_select/:Id", Views.Province.GetProvince);

  // District CTL
  app.post(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    Views.District.CreateDistrict
  );
  app.put(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    Views.District.UpdateDistrict
  );
  app.get("/district", Views.District.AllDistrict);
  app.get("/district/:Id", Views.District.GetDistrict);
  // Gender
  app.post("/gender", Views.Gender.createGender);
  app.put("/gender", Views.Gender.updateGender);
  app.put("/disable_gender/:Id", Views.Gender.disableGender);
  app.get("/gender", Views.Gender.getGender);

  //company
  app.post("/company", Views.Company.CreateCompany);
  app.put("/company_img/:Id", Views.Company.UpdateCompanyImage);
  app.put("/company", Views.Company.UpdateCompanyText);
  app.get("/company_disaable/:Id", Views.Company.DisableCompany);
  app.put("/company_renew/:Id", Views.Company.RenewCompany);

  //chief Executive Officer
  app.post("/ceo", Views.ChiefExecutiveOfficer.CreateCEO);
};
