import { Model, Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  username: string;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}
