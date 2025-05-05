// import { IsEmail, IsString } from 'class-validator';

// export class CreateUserDto {
//   @IsString()
//   name: string;

//   @IsEmail()
//   email: string;

//   @IsString()
//   role: string;
// }

import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  role!: string;
}
