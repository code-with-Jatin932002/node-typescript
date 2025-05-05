// import { Request, Response } from 'express';
// import { UserService } from '../services/user.service';

// export class UserController {
//   static async getAll(req: Request, res: Response) {
//     const users = await UserService.findAll();
//     res.json(users);
//   }
// }



// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class UserController {
  static async getAll(req: Request, res: Response) {
    const users = await UserService.findAll();
    res.json(users);  // This will return the list of users
  }

  static async create(req: Request, res: Response) {
    const dto = plainToInstance(CreateUserDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const newUser = await UserService.create(dto);
    res.status(201).json(newUser);  // This will return the newly created user
  }
}
