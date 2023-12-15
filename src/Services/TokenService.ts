import jwt from "jsonwebtoken";
import config from "../../config/config";

class TokenService {
  generateToken(userId: number): string {
    return jwt.sign({ userId }, config.auth.secret!, { expiresIn: "1h" });
  }

  verifyToken(token: string): { userId: number; exp: number } {
    return jwt.verify(token, config.auth.secret!) as {
      userId: number;
      exp: number;
    };
  }

  isExpiredToken(exp: number): boolean {
    const now = Date.now() / 1000;
    return now > exp ? true : false;
  }
}

export default TokenService;
