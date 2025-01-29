import { Employee } from "../models/employeeModel";
import employeeData from "../data/employeeData";

// initialize the employee data using the given data in the assignments instruction
const employees: Employee[] = employeeData;

/**
 * @description Get all employees， set the function async temporarily.
 * @returns a Promise that resolves to an array of `Employee` objects.
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
  return employees;
};
