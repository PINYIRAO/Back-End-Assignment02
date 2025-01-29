import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

// define a router for deal with
const router: Router = Router();

/**
 * @route GET /
 * @description Get all items.
 */
/**
 * @openapi
 * /api/v1/employees:
 *  get:
 *   summary: Get all employees
 *   tags: [employee]
 *   responses:
 *    200:
 *     description: All employess
 */
router.get("/", employeeController.getAllEmployees);

export default router;
