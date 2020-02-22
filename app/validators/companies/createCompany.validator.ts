import { body } from "express-validator";
import { sendError } from "../sendErrorIfExist";

export const createCompanyValidator = [
   body("name").exists().isLength({ min: 1 }).withMessage("Не указано название компании!"),
   sendError
];
