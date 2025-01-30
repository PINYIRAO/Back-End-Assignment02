import { Request, Response, NextFunction } from "express";
import type { Branch } from "src/api/v1/models/branchModel";
import * as branchRoutes from "../src/api/v1/routes/branchRoutes";
import sampleBranchData from "../src/api/v1/data/branchData";
import request from "supertest";
import app from "../src/app";

describe("Branch Routes", () => {
  describe("GET /api/v1/branches", () => {
    it("should return all branch records as an array", async () => {
      const response = await request(app).get("/api/v1/branches");
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
      const response = await request(app).get("/api/v1/branches/2");
      // check the status
      expect(response.status).toBe(200);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("address");
    });
  });
  describe("POST /api/v1/branches", () => {
    it("should return a new branch object", async () => {
      const response = await request(app).post("/api/v1/branches").send({
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
  });
  describe("PUT /api/v1/branches/:id", () => {
    it("should update a exsiting branch object", async () => {
      const response = await request(app).put("/api/v1/branches/2").send({
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
  });
  describe("DELETE /api/v1/branches/:id", () => {
    it("should delete a exsiting branch object", async () => {
      const response = await request(app).delete("/api/v1/branches/3");

      // check the status
      expect(response.status).toBe(200);
      // check the returned branch has the right properties
      expect(response.body.data).toHaveProperty("name");
      expect(response.body.data).toHaveProperty("address");
    });
  });
});
