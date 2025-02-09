import Joi, { ObjectSchema } from "joi";

type Method = "POST" | "PUT";

// for validating the branch data from post and put request
export const branchSchema = (method: Method): ObjectSchema => {
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

    address:
      method === "POST"
        ? Joi.string().required().messages({
            "any.required": "Address is required",
            "string.empty": "Address cannot be empty",
          })
        : Joi.string().optional().messages({
            "string.empty": "Address cannot be empty",
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
  });

  return schema;
};
