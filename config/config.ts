// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
export const config = {
  server: {
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 8000,
    PREFIX: "/api",
  },
  auth: {
    secret: process.env.access_token,
  },
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
  },
};

export default config;
