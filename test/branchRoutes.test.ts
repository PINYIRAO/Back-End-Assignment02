import request, { Response } from "supertest";
import app from "../src/app";

describe("Branch Routes", () => {
  describe("GET /api/v1/branches", () => {
    it("should return all branch records as an array", async () => {
      const response: Response = await request(app).get("/api/v1/branches");
      // check the status
      expect(response.status).toBe(200);
      // check the result type is an array
      expect(response.body.data).toBeInstanceOf(Array);
    });
  });
  describe("GET /api/v1/branches/:id", () => {
    it("should receive an error if the id is not found", async () => {
      const response: Response = await request(app).get(
        "/api/v1/branches/abcdefg"
      );
      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/not be found/);
    });
  });
  describe("POST /api/v1/branches", () => {
    it("should return a new branch object", async () => {
      const response: Response = await request(app)
        .post("/api/v1/branches")
        .send({
          name: "Red River",
          address: "St. James 1111",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(201);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("address");
    });
    it("should receive an error when name length is less than 3", async () => {
      const response: Response = await request(app)
        .post("/api/v1/branches")
        .send({
          name: "Re",
          address: "St. James 1111",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/should greater than 3/i);
    });
    it("should receive an error when address field is missing", async () => {
      const response: Response = await request(app)
        .post("/api/v1/branches")
        .send({
          name: "Red River Branch",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/address is required/i);
    });
  });
  describe("PUT /api/v1/branches/:id", () => {
    it("should receive an error if the is id not found", async () => {
      const response: Response = await request(app)
        .put("/api/v1/branches/abcdef")
        .send({
          address: "St. James 1111",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/failed to update/i);
    });
    it("should receive an error if has the name field", async () => {
      const response: Response = await request(app)
        .put("/api/v1/branches/2")
        .send({
          name: "Red River Branch",
          address: "St. James 1111",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/is not allowed to be updated/i);
    });
    it("should receive an error if phone is an empty string", async () => {
      const response: Response = await request(app)
        .put("/api/v1/branches/2")
        .send({
          address: "St. James 1111",
          phone: "",
        });

      // check the status
      expect(response.status).toBe(400);
      // check han return an object containing message
      expect(response.body.status).toMatch(/error/i);
      expect(response.body.message).toMatch(/cannot be empty/i);
    });
  });
  describe("DELETE /api/v1/branches/:id", () => {
    it("should receive an error if the id is not found", async () => {
      const response: Response = await request(app).delete(
        "/api/v1/branches/abcdefg"
      );

      // check the status
      expect(response.status).toBe(500);
      expect(response.body.status).toMatch(/error/);
      expect(response.body.message).toMatch(/not found/);
    });
  });
});
