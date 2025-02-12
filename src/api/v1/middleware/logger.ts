import morgan, { StreamOptions } from "morgan";
import fs from "fs";
import path from "path";
import { Writable } from "stream";
import { RequestHandler } from "express";

// create a write stream( in append mode) for regular logs
const accessLogStream: Writable = fs.createWriteStream(
  path.join(__dirname, "../../../../logs/access.log"),
  { flags: "a" }
);

// define a write stream for error logging

const errorLogStream: StreamOptions = {
  write: (message) =>
    fs.appendFileSync(
      path.join(__dirname, "../../../../logs/error.log"),
      message
    ),
};

const accessLogger: RequestHandler = morgan("combined", {
  stream: accessLogStream,
});

const errorLogger: RequestHandler = morgan("combined", {
  stream: errorLogStream,
});

export { accessLogger, errorLogger };
