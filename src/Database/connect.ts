import { Sequelize } from "sequelize";
import config from "../../config/config";

export const connection = new Sequelize(
  config.db.db_name!,
  config.db.user!,
  config.db.password!,
  {
    host: config.db.host,
    dialect: "postgres",
    port: +config.db.port | 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 22000,
    },
  }
);
