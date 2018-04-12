import { User } from './user';

export class SearchResponse{
  total_count: string;
  items: User[];
}