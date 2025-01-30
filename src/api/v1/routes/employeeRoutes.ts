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
 *   tags: [Employee]
 *   responses:
 *    200:
 *     description: All employess
 */
router.get("/", employeeController.getAllEmployees);

/**
 * @route POST /
 * @description Create a new employee
 */
/**
 * @openapi
 * /api/v1/employees:
 *  post:
 *   summary: Create a new employee
 *   tags: [Employee]
 *   requestBody:
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             position:
 *               type: string
 *             department:
 *               type: string
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             branchId:
 *               type: number
 *   responses:
 *    201:
 *     description: the new employee
 */
router.post("/", employeeController.createEmployee);

export default router;
