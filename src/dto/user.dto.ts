import { UserRoleInterface } from "src/interface/user_role.interface";
import { UserRolesEntity } from "../models/user_roles.model";

export class CreateUserDto {
  name?: string;
  username: string;
  email: string;
  password: string;
  country_code?: string;
  phone?: string;
  profile_image_url?: string;
}

export class UpdateUserDto {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  country_code?: string;
  phone?: string;
  profile_image_url?: string;
  email_token?: string;
}

interface UserRoleWithRole {
  id: string;
  userId: string;
  roleId: string;
  assignedAt: Date;
  deletedAt?: Date;
  role?: {
    id: string;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  } | null;
}

export class UserResponseDto {
  id: string;
  name?: string;
  username: string;
  email: string;
  country_code?: string;
  phone?: string;
  profile_image_url?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  userRoles?: UserRoleWithRole[];
} 