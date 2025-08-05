import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRolesEntity } from '../models/user_roles.model';
import { UserEntity } from '../models/user.model';
import { RoleEntity } from '../models/role.model';

@Injectable()
export class UserRolesRepository {
  constructor(
    @InjectRepository(UserRolesEntity)
    private readonly repo: Repository<UserRolesEntity>,
  ) {}

  async findAll(): Promise<UserRolesEntity[]> {
    return this.repo.find({
      relations: ['user', 'role'],
    });
  }

  async findByUserId(userId: string): Promise<UserRolesEntity[]> {
    return this.repo.find({
      where: { userId },
      relations: ['role'],
    });
  }

  async create(userId: string, roleId: string): Promise<UserRolesEntity> {
    const userRole = this.repo.create({ userId, roleId });
    return this.repo.save(userRole);
  }

  async assignRoleToUser(userId: string, roleName: string): Promise<UserRolesEntity | null> {
    // This method will be used to assign roles by name
    // You'll need to inject RoleRepository to use this
    return null;
  }

  async createSampleAssignments(
    users: UserEntity[],
    roles: RoleEntity[],
  ): Promise<void> {
    const existingAssignments = await this.findAll();
    if (existingAssignments.length > 0) {
      return; // Assignments already exist
    }

    // Create sample assignments based on usernames
    const assignments = [
      { username: 'superadmin', roleName: 'superadmin' },
      { username: 'admin', roleName: 'admin' },
      { username: 'renter', roleName: 'user' },
      { username: 'buyer', roleName: 'user' },
      { username: 'testingOne', roleName: 'moderator' },
    ];

    for (const assignment of assignments) {
      const user = users.find((u) => u.username === assignment.username);
      const role = roles.find((r) => r.name === assignment.roleName);

      if (user && role) {
        await this.create(user.id, role.id);
      }
    }
  }
} 