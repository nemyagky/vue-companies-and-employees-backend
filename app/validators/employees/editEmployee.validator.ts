import { body } from "express-validator";
import { sendError } from "../sendErrorIfExist";

export const editEmployeeValidator = [
   body("id").exists().isLength({ min: 1 }).withMessage("Не указан ID пользователя!")
      .matches(/^[0-9]+$/).withMessage("ID должен являться числовым значением!"),
   body("firstName").exists().isLength({ min: 1 }).withMessage("Не указано имя пользователя!")
      .matches(/^[а-яА-ЯёЁa-zA-Z]+$/).withMessage("Имя может содержать только русские и английские буквы!"),
   body("lastName").exists().isLength({ min: 1 }).withMessage("Не указано имя пользователя!")
      .matches(/^[а-яА-ЯёЁa-zA-Z]+$/).withMessage("Фамилия может содержать только русские и английские буквы!"),
   body("company").exists().isLength({ min: 1 }).withMessage("Не указано название компании!"),
   sendError
];
