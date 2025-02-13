import request, { Response } from "supertest";
import app from "../src/app";

describe("Employee Routes", () => {
  describe("GET /api/v1/employees", () => {
    it("should return all employee records as an array when no query paramters provided", async () => {
      const response: Response = await request(app).get("/api/v1/employees");
      // check the status
      expect(response.status).toBe(200);
      // check the result type is an array
      expect(response.body.data).toBeInstanceOf(Array);
    });
    it("should return all employee records as an array matching criteria when  query paramters provided", async () => {
      const department: string = "Operations";
      const branchId: number = 3;

      const response: Response = await request(app)
        .get("/api/v1/employees")
        .query({ department, branchId });
      // check the status
      expect(response.status).toBe(200);
      // check the result type is an array
      expect(response.body.data).toBeInstanceOf(Array);
    });
  });
  describe("GET /api/v1/employees/:id", () => {
    it("should receive an error if the id is not found", async () => {
      const response: Response = await request(app).get(
        "/api/v1/employees/abcdefg"
      );
      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/not be found/);
    });
  });
  describe("POST /api/v1/employees", () => {
    it("should return a new employee object", async () => {
      const response: Response = await request(app)
        .post("/api/v1/employees")
        .send({
          name: "pinyi",
          position: "it",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: "12",
        });

      // check the status
      expect(response.status).toBe(201);
      // check the returned employee has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("position");
    });
    it("should receive an error when name length is less than 3", async () => {
      const response: Response = await request(app)
        .post("/api/v1/employees")
        .send({
          name: "xy",
          position: "it",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: 12,
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/should greater than 3/i);
    });
    it("should receive an error when position field is missing", async () => {
      const response: Response = await request(app)
        .post("/api/v1/employees")
        .send({
          name: "xyz",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: 12,
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/position is required/i);
    });
  });
  describe("PUT /api/v1/employees/:id", () => {
    it("should update a exsiting employee object", async () => {
      const response: Response = await request(app)
        .put("/api/v1/employees/abcdef")
        .send({
          position: "it",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: "1234",
        });

      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/failed to update/i);
    });
    it("should receive an error if has the name field", async () => {
      const response: Response = await request(app)
        .put("/api/v1/employees/2")
        .send({
          name: "XYZ",
          position: "it",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: 12,
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/is not allowed to be updated/i);
    });
    it("should receive an error if branchid is not a string", async () => {
      const response: Response = await request(app)
        .put("/api/v1/employees/2")
        .send({
          name: "XYZ",
          position: "it",
          department: "IT",
          email: "prao@email.com",
          phone: "123-456-7890",
          branchId: 123,
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/must be a string/i);
    });
  });
  describe("DELETE /api/v1/employees/:id", () => {
    it("should receive an error if the id is not found", async () => {
      const response: Response = await request(app).delete(
        "/api/v1/employees/abcdefg"
      );

      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/not found/);
    });
  });
});
