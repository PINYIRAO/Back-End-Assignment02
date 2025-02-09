/**
 * Employee Controller (employeeController.ts)
 *
 * This file defines functions (controllers) for handling incoming requests related to employees.
 * These functions interact with the employee service (employeeService.ts) to perform the actual
 * logic for CRUD operations on employees.
 */

import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import type { Employee } from "../models/employeeModel";

interface EmployeeQueryParams {
  department?: string;
  branchId?: string;
}

/**
 * @description Get all employees.
 * @route GET /
 * @returns {Promise<void>}
 */
export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { department, branchId }: EmployeeQueryParams = req.query;
    const employees: Employee[] = await employeeService.getAllEmployees(
      department !== undefined ? department : undefined,
      branchId !== undefined ? parseInt(branchId) : undefined
    );

    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

/**
 * @description get an existing employee by id.
 * @route get /:id
 * @returns {Promise<void>}
 */
export const getEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // call the employeeService by passing the id from thge url path and the body of the request
    const employee: Employee = await employeeService.getEmployeeById(
      parseInt(req.params.id)
    );

    res.status(200).json({ message: "Employee Found", data: employee });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new employee.
 * @route POST /
 * @returns {Promise<void>}
 */
export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // call the employeeService by passing the body of the request
    const newEmployee: Employee = await employeeService.createEmployee(
      req.body
    );

    res.status(201).json({ message: "Employee Created", data: newEmployee });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update an existing employee.
 * @route PUT /:id
 * @returns {Promise<void>}
 */
export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // call the employeeService by passing the id from thge url path and the body of the request
    const updatedEmployee: Employee = await employeeService.updateEmployee(
      parseInt(req.params.id),
      req.body
    );

    res
      .status(200)
      .json({ message: "Employee Updated", data: updatedEmployee });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete an employee.
 * @route DELETE /:id
 * @returns {Promise<void>}
 */
export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const removedEmployee: Employee = await employeeService.deleteEmployee(
      parseInt(req.params.id)
    );

    res
      .status(200)
      .json({ message: "Employee Deleted", data: removedEmployee });
  } catch (error) {
    next(error);
  }
};
