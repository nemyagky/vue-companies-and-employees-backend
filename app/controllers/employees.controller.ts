import { Request, Response } from "express";
import moment from "moment";
import pool from "../connection";

export class EmployeesController {

   public static async getEmployees(req: Request, res: Response) {
      try {
         const employees = await pool.query(`SELECT * FROM employees`);
         res.json(employees.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   /**
    * @param req.body: {
    *    firstName: string,
    *    lastName: string,
    *    company: string
    * }
    */
   public static async createEmployee(req: Request, res: Response) {
      try {
         const newEmployee = await pool.query(`INSERT INTO employees (created_at, username, company_name)
            VALUES (
               '${moment().format("DD/MM/YY HH:mm")}',
               '${req.body.firstName} ${req.body.lastName}',
               '${req.body.company}'
            ) RETURNING *`);
         res.json(newEmployee.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   /**
    * @param req.body: {
    *    id: number
    *    firstName: string,
    *    lastName: string,
    *    company: string
    * }
    */
   public static async editEmployee(req: Request, res: Response) {
      try {
         const newEmployee = await pool.query(`UPDATE employees SET
               username='${req.body.firstName} ${req.body.lastName}',
               company_name='${req.body.company}'
               WHERE id='${req.body.id}' RETURNING *`);
         res.json(newEmployee.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   /**
    * @param req.body: {
    *    id: number
    * }
    */
   public static async deleteEmployee(req: Request, res: Response) {
      try {
         const deletedEmployee = await pool.query(`DELETE FROM employees WHERE id=${req.body.id} RETURNING *`);
         res.json(deletedEmployee.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }
}
