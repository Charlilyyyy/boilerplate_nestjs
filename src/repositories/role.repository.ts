import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../models/role.model';

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly repo: Repository<RoleEntity>,
  ) {}

  async findAll(): Promise<RoleEntity[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<RoleEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findByName(name: string): Promise<RoleEntity | null> {
    return this.repo.findOneBy({ name });
  }

  async create(roleData: Partial<RoleEntity>): Promise<RoleEntity> {
    const role = this.repo.create(roleData);
    return this.repo.save(role);
  }

  async createSampleRoles(): Promise<void> {
    const existingRoles = await this.findAll();
    if (existingRoles.length > 0) {
      return; // Roles already exist
    }

    const sampleRoles = [
      { name: 'admin', description: 'Administrator role with full access' },
      { name: 'user', description: 'Regular user role' },
      { name: 'moderator', description: 'Moderator role with limited admin access' },
      { name: 'superadmin', description: 'Super administrator with all permissions' },
    ];

    for (const roleData of sampleRoles) {
      await this.create(roleData);
    }
  }
} 