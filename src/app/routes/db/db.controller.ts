import { NextFunction, Request, Response, Router } from "express";
import { getDatabase, queryDatabase } from "./db.service";

const router = Router();

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const database = await getDatabase(req.params.id);
    res.json({ database });
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
router.get(
  "/query/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = await queryDatabase(req.params.id);
      res.json({ query });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
