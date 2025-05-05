// import { AuthUser } from '../models/authUser.model';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { config } from '../config';

// export class AuthService {
//   static async registerUser(data: any) {
//     const existing = await AuthUser.findOne({ email: data.email });
//     if (existing) throw new Error('User already exists');

//     const user = new AuthUser(data);
//     await user.save();
//     return user;
//   }

//   static async loginUser(email: string, password: string) {
//     const user = await AuthUser.findOne({ email });
//     if (!user) throw new Error('Invalid credentials');

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) throw new Error('Invalid credentials');

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       config.jwtSecret,
//       { expiresIn: '1h' }
//     );

//     return { token, user };
//   }
// }


import { AuthDAO } from '../daos/auth.dao';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export class AuthService {
  static async registerUser(data: any) {
    const existing = await AuthDAO.findByEmail(data.email);
    if (existing) throw new Error('User already exists');

    return await AuthDAO.create(data);
  }

  static async loginUser(email: string, password: string) {
    const user = await AuthDAO.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    return { token, user };
  }
}
