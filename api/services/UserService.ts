import { injectable } from "inversify";
import User from "../models/User";

@injectable()
export class UserService {
  public async getAllUsers() {
    return User.find();
  }
}
