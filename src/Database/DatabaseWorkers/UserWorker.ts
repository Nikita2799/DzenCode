import { User } from "../../Database/Models/User";
import { UserInstance } from "../../Types/user";

class UserWorker {
  private user;
  constructor() {
    this.user = User;
  }
  async createUser(user_params: any): Promise<UserInstance> {
    return await this.user.create({ ...user_params });
  }

  async findUserById(id: number): Promise<UserInstance | null> {
    return await this.user.findOne({ where: { id } });
  }
}

export default UserWorker;
