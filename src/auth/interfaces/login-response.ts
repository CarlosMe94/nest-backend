import { User } from '../entities/user.entity';

export interface LoginREsponse {
  user: User;
  token: string;
}
