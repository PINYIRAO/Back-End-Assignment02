import { Employee } from "../models/employeeModel";
import employeeData from "../data/employeeData";

// initialize the employee data using the given data in the assignments instruction
const employees: Employee[] = employeeData;

function newEmployeeId(employees: Employee[]): number {
  // get the id for new employee
  return employees.reduce(
    (id, employee) => (id > employee.id ? id : employee.id) + 1,
    0
  );
}

/**
 * @description Get all employees， set the function async temporarily.
 * @returns a Promise that resolves to an array of `Employee` objects.
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
  return employees;
};

/**
 * @description create a employee.
 * @param {{name: string;  position: string;  department: string;  email: string;  phone: string;  branchId: number;}}
 * employee - the employee data
 * @returns {Promise<Employee>} A promise that resolves to the created employee
 */
export const createEmployee = async (employee: {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}): Promise<Employee> => {
  // define a new employee
  const newEmployee: Employee = { id: newEmployeeId(employees), ...employee };

  // add the new employee to the global scoped array of employees
  employees.push(newEmployee);
  return newEmployee;
};
