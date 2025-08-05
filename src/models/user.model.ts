import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  country_code?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'text', nullable: true })
  profile_image_url?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email_token?: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', nullable: true, default: () => 'now()' })
  created_at?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true, default: () => 'now()' })
  updated_at?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deleted_at?: Date;

  constructor(partial?: Partial<UserEntity>) {
    if (partial) Object.assign(this, partial);
  }
}
