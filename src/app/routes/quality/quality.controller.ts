import { Router } from "express";
import qaTestsRouter from "./qa-tests/qa-tests.controller";
import userRouter from "./user/user.controller";

const qualityRouter = Router()
  .use("/qa-tests", qaTestsRouter)
  .use("/user", userRouter);

export default qualityRouter;
