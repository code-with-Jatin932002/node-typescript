// // src/services/user.service.ts
// import { User } from '../models/user.model';
// import { CreateUserDto } from '../dtos/user.dto';

// export class UserService {
//   static async findAll() {
//     return await User.find();  // This fetches all users from MongoDB
//   }

//   static async create(userData: CreateUserDto) {
//     const user = new User(userData);
//     return await user.save();  // Save the new user to MongoDB
//   }
// }



import { CreateUserDto } from '../dtos/user.dto';
import { UserDAO } from '../daos/user.dao';

export class UserService {
  static async findAll() {
    return await UserDAO.findAll();
  }

  static async create(userData: CreateUserDto) {
    return await UserDAO.create(userData);
  }
}
