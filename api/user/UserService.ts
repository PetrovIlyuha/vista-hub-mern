import { injectable } from "inversify";
import bcryptjs from "bcryptjs";
import User from "./User.model";
import { UserDto } from "./User.dto";
import { formatMongoErrorResult } from "../util/formatMongoErrorResult";

@injectable()
export class UserService {
  public async getAllUsers() {
    return User.find();
  }
  public async createUser(user: UserDto) {
    try {
      const { username, email, password } = user;
      const passwordHash = bcryptjs.hashSync(password, 10);
      const newUser = new User({
        username,
        email,
        password: passwordHash,
      });
      return await newUser.save();
    } catch (err: any) {
      return formatMongoErrorResult(err.message, user);
    }
  }
}
