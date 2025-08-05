import { UserRole } from '../models/user.model';

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
} 