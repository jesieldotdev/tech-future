// userReducer.ts
import { createReducer } from '@reduxjs/toolkit';
// import { User } from '../../models/User';
import { clearPosts,setPosts} from '../actions/postActions';
import { Post } from '@/models/Post';

const initialState: Post[] | null = [];

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPosts, (state, action) => action.payload)
    .addCase(clearPosts, () => []);
});

export default postsReducer;