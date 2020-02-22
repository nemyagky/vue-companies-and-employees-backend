import { Request, Response } from "express";
import moment from "moment";
import pool from "../connection";

export class CompaniesController {

   public static async getCompanies(req: Request, res: Response) {
      try {
         const companies = await pool.query(`SELECT * FROM companies`);
         res.json(companies.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   /**
    * @param req.body: {
    *    name: string
    * }
    */
   public static async createCompany(req: Request, res: Response) {
      try {
         const newCompany = await pool.query(`INSERT INTO companies (created_at, name)
            VALUES('${moment().format("DD/MM/YY HH:mm")}', '${req.body.name}') RETURNING *`);
         res.json(newCompany.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

   /**\
    * @param req.body {
    *    id: number
    * }
    */
   public static async deleteCompany(req: Request, res: Response) {
      try {
         const deletedCompany = await pool.query(`DELETE FROM companies WHERE id=${req.body.id} RETURNING *`);
         res.json(deletedCompany.rows);
      } catch (e) {
         res.status(500).json(e.message);
      }
   }

}
