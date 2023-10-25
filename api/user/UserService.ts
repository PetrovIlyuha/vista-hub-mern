import { injectable } from "inversify";
import User from "./User.model";

@injectable()
export class UserService {
  public async getAllUsers() {
    return User.find();
  }
}
