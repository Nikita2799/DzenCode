import { Router } from "express";
import { CreateComment } from "../Controllers/Comments/CreateComment";
import { authMiddleware } from "../Middelware/auth_middelware";

export const CommentRouter = (router: Router) => {
  router.post("/comment", authMiddleware, CreateComment);
};
