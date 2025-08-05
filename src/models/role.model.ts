import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { UserRolesEntity } from './user_roles.model';

@Entity({ name: 'zz_roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: true,
    default: () => 'now()',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: true,
    default: () => 'now()',
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt?: Date;

  // Relationships
  @OneToMany(() => UserRolesEntity, (userRole) => userRole.role)
  userRoles: UserRolesEntity[];

  constructor(partial?: Partial<RoleEntity>) {
    if (partial) Object.assign(this, partial);
  }
} 