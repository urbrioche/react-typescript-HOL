import {PostInfo, reactionAdded} from "./postsSlice";
import {useAppDispatch} from "../../app/hooks";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

type reactionKeys = keyof typeof reactionEmoji;

const ReactionButtons = ({post}: { post: PostInfo }) => {
    const dispatch = useAppDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        const reaction = name as reactionKeys;
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction: reaction}))}
            >
                {emoji} {post.reactions[reaction]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;