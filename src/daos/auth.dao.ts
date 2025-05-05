import { AuthUser } from '../models/authUser.model';

export class AuthDAO {
  static async findByEmail(email: string) {
    return AuthUser.findOne({ email });
  }

  static async create(data: any) {
    const user = new AuthUser(data);
    return user.save();
  }
}
