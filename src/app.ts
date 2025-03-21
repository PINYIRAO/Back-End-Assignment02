// import the express application and type definition
import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

// Importing morgan
import { accessLogger } from "./api/v1/middleware/logger";
// import setupSwagger endpoint
import setupSwagger from "../config/swagger";
// import middleware
import errorHandler from "./api/v1/middleware/errorHandler";
// import routes
import healthRoutes from "./api/v1/routes/healthRoutes";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import helmet from "helmet";
import cors from "cors";

// initialize the express application
const app: Express = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      // strict the source of resource
      directives: {
        defaultSrc: ["'self'"],
      },
    },
    // prevent from clickjacking
    xFrameOptions: { action: "sameorigin" },
    // prevent the xss attack
    xXssProtection: true,
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000", "https://allowed.example.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allow the cross site request send credentials
    credentials: true,
  })
);

// setup swagger for api documentation
setupSwagger(app);

app.use("/static", express.static(path.join(__dirname, "public/images")));

app.use(express.json());

// Use morgan for HTTP request logging
app.use(accessLogger);

app.use("/health", healthRoutes);
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

// apply error handling middleware
app.use(errorHandler);

// export app and server for testing
export default app;
