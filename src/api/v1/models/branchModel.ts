/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description:  the branch id
 *         name:
 *           type: string
 *           description:  the branch name
 *         address:
 *           type: string
 *           description:  the branch address
 *         phone:
 *           type: string
 *           description:  the branch's phone
 */
export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
}
