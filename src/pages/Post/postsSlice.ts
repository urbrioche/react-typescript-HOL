import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
// You can safely import the RootState type from the store file here. 
// It's a circular import, but the TypeScript compiler can correctly handle that for types. 
// This may be needed for use cases like writing selector functions.

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        userId: '',
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        userId: '',
    }
];

const postSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {
            postAdded: {
                reducer(state, action: PayloadAction<{ id: string, title: string, content: string, userId: string }>) {
                    state.push(action.payload);
                },
                prepare(title: string, content: string, userId: string) {
                    return {
                        payload: {
                            id: nanoid(),
                            title,
                            content,
                            userId,
                        }
                    };
                }
            }
        },
    }
);

// reference: https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
// export const selectAllPosts = (state: any) => state.posts;
export const selectAllPosts = (state: RootState) => state.posts;
export const {postAdded} = postSlice.actions;

export default postSlice.reducer;