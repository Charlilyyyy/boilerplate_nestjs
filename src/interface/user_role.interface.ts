export interface UserRoleInterface {
  id: string;
  userId: string;
  roleId: string;
  assignedAt: Date;
  deletedAt?: Date;
}