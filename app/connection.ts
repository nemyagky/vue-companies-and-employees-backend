import fs from "fs";
import path from "path";
import { Pool } from "pg";

const connectionSettings = fs.readFileSync(path.resolve(__dirname, "../connection.json"), { encoding: "utf8" });

const pool = new Pool(JSON.parse(connectionSettings));

export default pool;
