import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import config from "./config";
import companiesRouter from "./routes/companies.router";
import employeesRouter from "./routes/employees.router";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(companiesRouter);
app.use(employeesRouter);

app.listen(config.server.port, (err) => {
  console.log("App is listening on " + config.server.port);
  if (err) {
    console.log(err);
  }
});
