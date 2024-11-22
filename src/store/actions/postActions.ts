// userActions.ts
import { Post } from '@/models/Post';
import { createAction } from '@reduxjs/toolkit';
// import { User } from '../../models/User';

export const setPosts = createAction<Post[]>('SET_POSTS');
export const clearPosts = createAction('CLEAR_POSTS');