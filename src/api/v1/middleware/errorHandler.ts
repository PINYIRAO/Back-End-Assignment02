import { Request, Response, NextFunction } from "express";
import { errorLogger } from "./logger";
import {
  ExtendedError,
  ValidationError,
  RepositoryError,
  ServiceError,
} from "../errors/errors";
import { errorResponse } from "../models/responseModel";

const errorHandler = (
  err: ExtendedError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // log the error with detailed information
  errorLogger.error(err.message, {
    code: err.code || "unknown",
    stack: err.stack,
    method: req.method,
    url: req.url,
    header: req.headers,
    environment: process.env.NODE_ENV,
  });

  // handle specific types of errors
  if (err instanceof ValidationError) {
    res.status(400).json(errorResponse(err.message, err.code));
  } else if (err instanceof RepositoryError || err instanceof ServiceError) {
    res.status(500).json(errorResponse(err.message, err.code));
  } else {
    res
      .status(500)
      .json(
        errorResponse(
          "An unexpected error occurred that is not categorized by the application"
        )
      );
  }
};

export default errorHandler;
