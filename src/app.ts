/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import routes from "./app/routes/routes";
import HttpException from "./app/models/http-exception.model";

const app = express();

/**
 * App Configuration
 */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ status: "API is running ✅" });
});

app.use(
  (
    err: Error | HttpException,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    // @ts-ignore
    if (err && err.name === "UnauthorizedError") {
      return res.status(401).json({
        status: "error",
        message: "missing authorization credentials",
      });
      // @ts-ignore
    } else if (err && err.status) {
      // @ts-ignore
      res.status(err.status).json({
        status: err.name,
        message: err.message,
      });
    } else if (err) {
      res.status(500).json({
        status: err.name,
        message: err.message,
      });
    }
  },
);

/**
 * Server activation
 */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
