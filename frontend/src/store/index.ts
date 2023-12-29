import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducers';

export const store = configureStore({
  reducer,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
