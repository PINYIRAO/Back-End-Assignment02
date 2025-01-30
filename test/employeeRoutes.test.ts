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
  describe("GET /api/v1/employees/:id", () => {
    it("should return the wanted employee", async () => {
      const response = await request(app).get("/api/v1/employees/2");
      // check the status
      expect(response.status).toBe(200);
      // check the returned employee has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("position");
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
  describe("PUT /api/v1/employees/:id", () => {
    it("should update a exsiting employee object", async () => {
      const response = await request(app).put("/api/v1/employees/2").send({
        position: "it",
        department: "IT",
        email: "prao@email.com",
        phone: "123-456-7890",
        branchId: 12,
      });

      // check the status
      expect(response.status).toBe(200);
      // check the returned employee has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("position");
      // check the updated email value
      expect(response.body.data.email).toBe("prao@email.com");
    });
  });
  describe("DELETE /api/v1/employees/:id", () => {
    it("should delete a exsiting employee object", async () => {
      const response = await request(app).delete("/api/v1/employees/20");

      // check the status
      expect(response.status).toBe(200);
      // check the returned employee has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("position");
      // check the email format, including @
      expect(response.body.data.email).toMatch("@");
    });
  });
});
