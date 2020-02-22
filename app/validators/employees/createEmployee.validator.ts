import { body } from "express-validator";
import { sendError } from "../sendErrorIfExist";

export const createEmployeeValidator = [
   body("firstName").exists().isLength({ min: 1 }).withMessage("Не указано имя пользователя!")
      .matches(/^[а-яА-ЯёЁa-zA-Z]+$/).withMessage("Имя может содержать только русские и английские буквы!"),
   body("lastName").exists().isLength({ min: 1 }).withMessage("Не указано имя пользователя!")
      .matches(/^[а-яА-ЯёЁa-zA-Z]+$/).withMessage("Фамилия может содержать только русские и английские буквы!"),
   body("company").exists().isLength({ min: 1 }).withMessage("Не указано название компании!"),
   sendError
];
