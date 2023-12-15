import { Router } from "express";
import { corsSettings } from "./cors";
import { CommentRouter } from "../../src/Routers/CommentRouter";

const router = Router();
router.use(corsSettings);

CommentRouter(router);

router.options("*", corsSettings);

export default router;
