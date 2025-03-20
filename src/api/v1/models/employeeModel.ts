/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description:  the employee id
 *         name:
 *           type: string
 *           description:  the employee name
 *         position:
 *           type: string
 *           description:  the employee position
 *         department:
 *           type: string
 *           description:  the employee department
 *         email:
 *           type: string
 *           description:  the employee email
 *         phone:
 *           type: string
 *           description:  the employee phone
 *         branchId:
 *           type: string
 *           description:  the employee's branchId
 */
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: string;
}
