/**
 * Employee Controller (employeeController.ts)
 *
 * This file defines functions (controllers) for handling incoming requests related to employees.
 * These functions interact with the item service (employeeService.ts) to perform the actual
 * logic for CRUD operations on employees.
 */

import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import type { Employee } from "../models/employeeModel";

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
    const employees: Employee[] = await employeeService.getAllEmployees();

    res.status(200).json(employees);
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
