import { Request, Response, NextFunction } from "express";
import type { Employee } from "src/api/v1/models/employeeModel";
import * as employeeRoutes from "../src/api/v1/routes/employeeRoutes";
import sampleEmployeeData from "../src/api/v1/data/employeeData";
import request from "supertest";
import app from "../src/app";

describe("Employee Routes", () => {
  describe("GET /api/v1/employees", () => {
    it("should return all employee records as an array", async () => {
      const response = await request(app).get("/api/v1/employees");
      // check the status
      expect(response.status).toBe(200);
      // check the result type is an array
      expect(response.body).toBeInstanceOf(Array);
      // check the array length equal sample data length
      expect(response.body.length).toEqual(sampleEmployeeData.length);
    });
  });
  describe("POST /api/v1/employees", () => {
    it("should return a new employee object", async () => {
      const response = await request(app).post("/api/v1/employees").send({
        name: "pinyi",
        position: "it",
        department: "IT",
        email: "prao@email.com",
        phone: "123-456-7890",
        branchId: 12,
      });

      // check the status
      expect(response.status).toBe(201);
      // check the returned employee has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("position");
    });
  });
});
