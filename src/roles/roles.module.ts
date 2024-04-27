/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Role } from './roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
