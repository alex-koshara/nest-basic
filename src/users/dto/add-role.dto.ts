import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Add user role' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'user id' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
