import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {sub} from "date-fns";
// You can safely import the RootState type from the store file here. 
// It's a circular import, but the TypeScript compiler can correctly handle that for types. 
// This may be needed for use cases like writing selector functions.

interface PostInfo {
    id: string;
    title: string;
    content: string;
    userId: string;
    date: string;
}

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        userId: '',
        date: sub(new Date(), {minutes: 10}).toISOString()
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        userId: '',
        date: sub(new Date(), {minutes: 5}).toISOString()
    }
];

const postSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {
            postAdded: {
                reducer(state, action: PayloadAction<PostInfo>) {
                    state.push(action.payload);
                },
                prepare(title: string, content: string, userId: string) {
                    return {
                        payload: {
                            id: nanoid(),
                            title,
                            content,
                            date: new Date().toISOString(),
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