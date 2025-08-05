import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.model';
import { RoleEntity } from './role.model';

@Entity({ name: 'user_roles' })
export class UserRolesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid', nullable: false })
  userId: string;

  @Column({ name: 'role_id', type: 'uuid', nullable: false })
  roleId: string;

  @CreateDateColumn({
    name: 'assigned_at',
    type: 'timestamptz',
    nullable: true,
    default: () => 'now()',
  })
  assignedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt?: Date;

  // Relationships
  @ManyToOne(() => UserEntity, (user) => user.userRoles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  constructor(partial?: Partial<UserRolesEntity>) {
    if (partial) Object.assign(this, partial);
  }
} 