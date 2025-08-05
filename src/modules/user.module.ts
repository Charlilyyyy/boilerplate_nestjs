import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from '../models/user.model';
import { RoleEntity } from '../models/role.model';
import { UserRolesEntity } from '../models/user_roles.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity, UserRolesEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {} 