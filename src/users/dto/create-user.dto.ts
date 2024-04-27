import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Wrong email' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'User password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'min 4 symbols and max 16' })
  readonly password: string;
}
