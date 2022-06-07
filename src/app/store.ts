import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../pages/CounterRedux/conterSlice";
import postsReducer from "../pages/Post/postsSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
    }
});

// reference: https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch