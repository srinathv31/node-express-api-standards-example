import { NextFunction, Request, Response, Router } from "express";
import { getTests, updateTest } from "./qa-tests.service";

const router = Router();

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tests = await getTests();
    res.json({ tests });
  } catch (error) {
    next(error);
  }
});

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.post(
  "/:id/update",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tests = await updateTest(+req.params.id, req.body.name);
      res.json({ tests });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
