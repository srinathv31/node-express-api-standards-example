import { NextFunction, Request, Response, Router } from "express";
import {
  createDatabasePage,
  getPage,
  searchPage,
  updatePage,
} from "./page.service";

const router = Router();

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.get(
  "/search/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = await searchPage(req.params.id);
      res.json({ page });
    } catch (error) {
      next(error);
    }
  },
);

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = await getPage(req.params.id);
    res.json({ page });
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
  "/:id/create",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = await createDatabasePage(req.params.id, {});
      res.json({ page });
    } catch (error) {
      next(error);
    }
  },
);

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
      const page = await updatePage(req.params.id, req.body.hours);
      res.json({ page });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
