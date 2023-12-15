import { Request, Response, NextFunction } from "express";
import TokenService from "../Services/TokenService";
import UserWorker from "../Database/DatabaseWorkers/UserWorker";
import { ExpressRequest } from "../Types/express";

const tokenService = new TokenService();
const user = new UserWorker();

export const authMiddleware = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const { username, email } = req.body;
    console.log(req.headers.authorization);

    if (!token) {
      const user_data = generate_user(username, email);
      const newUser = await user.createUser(user_data);

      req.user = newUser.dataValues;
      req.token = tokenService.generateToken(newUser.dataValues.id);
    } else {
      const decodeToken = tokenService.verifyToken(token);
      const user_data = await user.findUserById(decodeToken.userId);
      if (!user_data) return res.status(404).json();

      const isExpiredToken = tokenService.isExpiredToken(decodeToken.exp);

      req.token = isExpiredToken
        ? tokenService.generateToken(user_data?.dataValues.id!)
        : token;
      req.user = user_data;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

const generate_user = (username: string | null, email: string | null) => {
  return {
    username: username ? username : `user_${Math.floor(Math.random() * 10000)}`,
    email: email ? email : null,
  };
};
