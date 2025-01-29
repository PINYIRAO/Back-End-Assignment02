import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

// define a router for deal with
const router: Router = Router();

router.post("/", employeeController.createEmployee);
