import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { validateUnknownFields } from "../validators/unknownFieldsValidator";
import { UserDto } from "./User.dto";
import { UserService } from "./UserService";

@controller("/users")
export class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  @httpGet("/")
  public async getUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();
    return res.json(users);
  }

  @httpPost("/sign-up")
  public async registerNewUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const userDto: UserDto = {
      username: username as string,
      email: email as string,
      password: password as string,
    };
    try {
      await validateUnknownFields(userDto, req.body);
      const createdUser = await this.userService.createUser(userDto);
      res.status(201).json(createdUser);
    } catch (validationErrors) {
      res.status(400).json(validationErrors);
    }
  }
}
