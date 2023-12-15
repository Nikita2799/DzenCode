import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        username: string;
        email: string | null;
      };
      token?: string;
    }
  }
}

export type ExpressRequest = Request & {
  user?: {
    id: number;
    username: string;
    email: string | null;
  };
  token?: string;
};
