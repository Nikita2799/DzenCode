import { connection } from "../../Database/connect";
import { UserInstance } from "../../Types/user";
import { DataTypes } from "sequelize";

export const User = connection.define<UserInstance>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Anonym",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: connection.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: connection.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    modelName: "User",
    defaultScope: {
      raw: true,
    },
  }
);

connection.sync();
