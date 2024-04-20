import { Router } from "express";
import dbController from "./db/db.controller";
import pageController from "./page/page.controller";
import qualityRouter from "./quality/quality.controller";

const api = Router()
  .use("/database", dbController)
  .use("/page", pageController)
  .use("/quality", qualityRouter);

export default Router().use("/v1/notion", api);
