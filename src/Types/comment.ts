import { Model, Optional } from "sequelize";

interface CommentAttributes {
  id: number;
  user_id: number | null;
  parent_id: number | null;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

export interface CommentInstance
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}
