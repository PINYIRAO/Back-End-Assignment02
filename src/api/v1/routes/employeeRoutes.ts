import { Router } from "express";
import * as employeeController from "../controllers/employeeController";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validations/employeeValidation";

// define a router for deal with
const router: Router = Router();

/**
 * @route GET /
 * @description Get all employees that qualified with the optional parameters in  query.
 */
/**
 * @openapi
 * /api/v1/employees:
 *  get:
 *   summary: Get all employees matching the criteria
 *   tags: [Employee]
 *   parameters:
 *    - in: query
 *      name: branchId
 *      schema:
 *        type: string
 *      description: Filter employees by branch ID.
 *    - in: query
 *      name: department
 *      schema:
 *        type: string
 *      description: Filter employees by department name.
 *   responses:
 *    200:
 *     description: All employess  matching the criteria
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
router.post(
  "/",
  validateRequest(employeeSchema("POST")),
  employeeController.createEmployee
);

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
router.put(
  "/:id",
  validateRequest(employeeSchema("PUT")),
  employeeController.updateEmployee
);

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
