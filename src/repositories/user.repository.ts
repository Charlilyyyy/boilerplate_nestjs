import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.model';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ email });
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ username });
  }

  async findByEmailToken(token: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ email_token: token });
  }

  async create(createUserDto: Partial<CreateUserDto>): Promise<UserEntity> {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity | null> {
    const user = await this.repo.findOneBy({ id });
    if (!user) return null;
    Object.assign(user, updateUserDto);
    return this.repo.save(user);
  }

  async delete(email: string): Promise<boolean> {
    const result = await this.repo.delete(email);
    return result.affected > 0;
  }

  async softDeleteByEmail(email: string): Promise<boolean> {
    const result = await this.repo.softDelete({ email });
    return result.affected > 0;
  }

  async updateEmailTokenByEmail(email: string, token: string): Promise<void> {
    await this.repo.update({ email }, { email_token: token });
  }
} 