import { Router } from "express";
import dbController from "./db/db.controller";
import pageController from "./page/page.controller";

const api = Router()
  .use("/database", dbController)
  .use("/page", pageController);

export default Router().use("/v1/notion", api);
