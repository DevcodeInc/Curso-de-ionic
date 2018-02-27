import { User } from './user.model';

export interface Post {
  image: string;
  text: string;
  location: string;
  favorite: boolean;
  user: User
}
