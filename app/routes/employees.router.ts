import { Router } from "express";
import { EmployeesController } from "../controllers/employees.controller";
import { createEmployeeValidator } from "./../validators/employees/createEmployee.validator";
import { deleteEmployeeValidator } from "./../validators/employees/deleteEmployee.validator";
import { editEmployeeValidator } from "./../validators/employees/editEmployee.validator";

const router = Router();

router.get("/employees", EmployeesController.getEmployees);
router.post("/employee", createEmployeeValidator, EmployeesController.createEmployee);
router.patch("/employee", editEmployeeValidator, EmployeesController.editEmployee);
router.delete("/employee", deleteEmployeeValidator, EmployeesController.deleteEmployee);

export default router;
