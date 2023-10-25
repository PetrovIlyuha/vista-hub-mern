import { controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { UserService } from "./UserService";
import { Request, Response } from "express";

@controller("/users")
export class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  @httpGet("/")
  public async getUsers(req: Request, res: Response) {
    console.log("BOOMM!");
    const users = await this.userService.getAllUsers();
    res.json(users);
  }
}
