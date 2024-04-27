import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'user@mail.com', description: 'email' })
  readonly value: string;

  @ApiProperty({ example: 'qwerty123', description: 'password' })
  readonly description: string;
}
