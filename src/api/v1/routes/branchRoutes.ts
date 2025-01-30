import { Router } from "express";
import * as branchesController from "../controllers/branchesController";

// define a router for deal with
const router: Router = Router();

/**
 * @route GET /
 * @description Get all branches.
 */
/**
 * @openapi
 * /api/v1/branches:
 *  get:
 *   summary: Get all branches
 *   tags: [Branches]
 *   responses:
 *    200:
 *     description: All employess
 */
router.get("/", branchesController.getAllBranches);

/**
 * @route GET /:id
 * @description Get an existing branches.
 */
/**
 * @openapi
 * /api/v1/branches/{id}:
 *   get:
 *     summary: Get an existing branches
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the branches to be found
 *     responses:
 *       200:
 *         description: The wanted branches
 */
router.get("/:id", branchesController.getBranchesById);

/**
 * @route POST /
 * @description Create a new branches
 */
/**
 * @openapi
 * /api/v1/branches:
 *  post:
 *   summary: Create a new branches
 *   tags: [Branches]
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
 *     description: the new branches
 */
router.post("/", branchesController.createBranches);

/**
 * @route PUT /:id
 * @description Update an existing branches.
 *
 * @openapi
 * /api/v1/branches/{id}:
 *   put:
 *     summary: Update an existing branches
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the branches to update
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
 *         description: The updated branches
 */
router.put("/:id", branchesController.updateBranches);

/**
 * @route DELETE /:id
 * @description Delete an branches profile.
 */
/**
 * @openapi
 * /api/v1/branches/{id}:
 *   delete:
 *     summary: Delete an existing branches
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID of the branches to be deleted
 *     responses:
 *       200:
 *         description: The deleted branches
 */
router.delete("/:id", branchesController.deleteBranches);

export default router;
