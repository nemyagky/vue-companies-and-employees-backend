import { Router } from "express";
import { CompaniesController } from "../controllers/companies.controller";
import { createCompanyValidator } from "./../validators/companies/createCompany.validator";
import { deleteCompanyValidator } from "./../validators/companies/deleteCompany.validator";

const router = Router();

router.get("/companies", CompaniesController.getCompanies);
router.post("/company", createCompanyValidator, CompaniesController.createCompany);
router.delete("/company", deleteCompanyValidator, CompaniesController.deleteCompany);

export default router;
