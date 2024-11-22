// userApi.ts
import { Post } from '@/models/Post';
import axios from 'axios';

interface ApiResponse {
  posts: Post[];
}


const API_BASE_URL = 'https://posts-api-next.vercel.app/api';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<ApiResponse>(`${API_BASE_URL}/posts/`);
  return response.data.posts;
};