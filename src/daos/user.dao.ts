import { User } from '../models/user.model';
import { CreateUserDto } from '../dtos/user.dto';

export class UserDAO {
  static async findAll() {
    return User.find();
  }

  static async create(userData: CreateUserDto) {
    const user = new User(userData);
    return user.save();
  }
}
