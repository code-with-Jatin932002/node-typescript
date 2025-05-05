import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { plainToInstance } from 'class-transformer';
import { RegisterDto, LoginDto } from '../dtos/auth.dto';
import { validate } from 'class-validator';

export class AuthController {
  static async register(req: Request, res: Response) {
    const dto = plainToInstance(RegisterDto, req.body);
    const errors = await validate(dto);
    if (errors.length > 0) return res.status(400).json({ errors });

    try {
      const user = await AuthService.registerUser(dto);
      res.status(201).json({ message: 'User registered', user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const dto = plainToInstance(LoginDto, req.body);
    const errors = await validate(dto);
    if (errors.length > 0) return res.status(400).json({ errors });

    try {
      const { token } = await AuthService.loginUser(dto.email, dto.password);
      res.json({ token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
