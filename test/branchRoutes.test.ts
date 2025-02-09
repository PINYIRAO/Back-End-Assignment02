import sampleBranchData from "../src/api/v1/data/branchData";
import request, { Response } from "supertest";
import app from "../src/app";

describe("Branch Routes", () => {
  describe("GET /api/v1/branches", () => {
    it("should return all branch records as an array", async () => {
      const response: Response = await request(app).get("/api/v1/branches");
      // check the status
      expect(response.status).toBe(200);
      // check the result type is an array
      expect(response.body).toBeInstanceOf(Array);
      // check the array length equal sample data length
      expect(response.body.length).toEqual(sampleBranchData.length);
    });
  });
  describe("GET /api/v1/branches/:id", () => {
    it("should return the wanted branch", async () => {
      const response: Response = await request(app).get("/api/v1/branches/2");
      // check the status
      expect(response.status).toBe(200);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("address");
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
      expect(response.body.data.id).toBeGreaterThan(0);
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
      expect(response.body).toHaveProperty("error");
      expect(response.body.error).toMatch("should greater than 3");
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
      expect(response.body).toHaveProperty("error");
      expect(response.body.error).toMatch(/address is required/i);
    });
  });
  describe("PUT /api/v1/branches/:id", () => {
    it("should update a exsiting branch object", async () => {
      const response: Response = await request(app)
        .put("/api/v1/branches/2")
        .send({
          address: "St. James 1111",
          phone: "123-456-7890",
        });

      // check the status
      expect(response.status).toBe(200);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("address");
      expect(response.body.data).toHaveProperty("phone");
      // check the updated address value
      expect(response.body.data.address).toBe("St. James 1111");
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
      expect(response.body).toHaveProperty("error");
      expect(response.body.error).toMatch(/is not allowed to be updated/i);
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
      expect(response.body).toHaveProperty("error");
      expect(response.body.error).toMatch(/cannot be empty/i);
    });
  });
  describe("DELETE /api/v1/branches/:id", () => {
    it("should delete a exsiting branch object", async () => {
      const response: Response = await request(app).delete(
        "/api/v1/branches/3"
      );

      // check the status
      expect(response.status).toBe(200);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("address");
    });
  });
});
