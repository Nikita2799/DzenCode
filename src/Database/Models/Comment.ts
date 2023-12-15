import { DataTypes } from "sequelize";
import { connection } from "../../Database/connect";
import { User } from "./User";
import { CommentInstance } from "../../Types/comment";

export const Comment = connection.define<CommentInstance>(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    parent_id: { type: DataTypes.INTEGER, allowNull: true },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "Comment",
    defaultScope: {
      raw: true,
    },
  }
);
Comment.belongsTo(User, { foreignKey: "user_id" });
Comment.belongsTo(Comment, { as: "parent", foreignKey: "parent_id" });
connection.sync();
