// import the express application and type definition
import express, { Express } from "express";
// Importing morgan
import morgan from "morgan";
// import setupSwagger endpoint
import setupSwagger from "../config/swagger";
// import routes
import healthRoutes from "./api/v1/routes/healthRoutes";

// initialize the express application
const app: Express = express();

// setup swagger for api documentation
setupSwagger(app);

// Use morgan for HTTP request logging
app.use(morgan("combined"));

app.use("/health", healthRoutes);

// export app and server for testing
export default app;
