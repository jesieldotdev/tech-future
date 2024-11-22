 // PostsViewModel.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchPosts } from '@/api/PostApi';
import { clearPosts, setPosts } from '@/store/actions/postActions';

export const usePostsViewModel = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  const loadPosts = async () => {
    try {
      const postsData = await fetchPosts();
      dispatch(setPosts(postsData));
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  const logout = () => {
    dispatch(clearPosts());
  };

  return { posts, loadPosts, logout };
};

