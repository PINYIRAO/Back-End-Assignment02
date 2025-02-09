import Joi, { ObjectSchema } from "joi";

type Method = "POST" | "PUT";

// for validating the employee data from post and put request
export const employeeSchema = (method: Method): ObjectSchema => {
  const schema: ObjectSchema = Joi.object({
    id: Joi.number().optional().min(0).messages({
      "number.min": "id should be positive",
    }),
    name:
      method === "POST"
        ? Joi.string().required().min(3).messages({
            "any.required": "Name is required",
            "string.min": "Name length should greater than 3",
          })
        : Joi.forbidden().messages({
            "any.unknown": "Name is not allowed to be updated",
          }),

    position:
      method === "POST"
        ? Joi.string().required().messages({
            "any.required": "Position is required",
            "string.empty": "Position cannot be empty",
          })
        : Joi.string().optional().messages({
            "string.empty": "Position cannot be empty",
          }),

    department:
      method === "POST"
        ? Joi.string().required().messages({
            "any.required": "Department is required",
            "string.empty": "Department cannot be empty",
          })
        : Joi.string().optional().messages({
            "string.empty": "Department cannot be empty",
          }),
    email:
      method === "POST"
        ? Joi.string().required().email().messages({
            "any.required": "Email is required",
            "string.empty": "Email cannot be empty",
            "string.email": "Email is not valid",
          })
        : Joi.string().optional().email().messages({
            "string.empty": "Email cannot be empty",
            "string.email": "Email is not valid",
          }),
    phone:
      method === "POST"
        ? Joi.string().required().messages({
            "any.required": "Phone is required",
            "string.empty": "Phone cannot be empty",
          })
        : Joi.string().optional().messages({
            "string.empty": "Phone cannot be empty",
          }),
    branchId:
      method === "POST"
        ? Joi.number().required().min(0).messages({
            "any.required": "BranchId is required",
            "number.min": "BranchId should be positive",
          })
        : Joi.number().optional().min(0).messages({
            "number.min": "BranchId should be positive",
          }),
  });

  return schema;
};
