import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

// define a router for deal with
const router: Router = Router();

/**
 * @route GET /
 * @description Get all employees.
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
 * @route GET /:id
 * @description Get an existing employee.
 */
/**
 * @openapi
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Get an existing employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the employee to be found
 *     responses:
 *       200:
 *         description: The wanted employee
 */
router.get("/:id", employeeController.getEmployeeById);

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

/**
 * @route PUT /:id
 * @description Update an existing employee.
 *
 * @openapi
 * /api/v1/employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the employee to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               position:
 *                 type: string
 *               department:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                   type: string
 *               branchId:
 *                 type: number
 *     responses:
 *       200:
 *         description: The updated employee
 */
router.put("/:id", employeeController.updateEmployee);

/**
 * @route DELETE /:id
 * @description Delete an employee profile.
 */
/**
 * @openapi
 * /api/v1/employees/{id}:
 *   delete:
 *     summary: Delete an existing employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the employee to be deleted
 *     responses:
 *       200:
 *         description: The deleted employee
 */
router.delete("/:id", employeeController.deleteEmployee);

export default router;
