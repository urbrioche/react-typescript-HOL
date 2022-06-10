import {useAppSelector} from "../../app/hooks";
import {selectAllPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TImeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
    // 第一版寫法
    // const posts = useSelector<RootState, { id: string, title: string, content: string }[]>(state => state.posts);
    // 查了一下官網的建議做法 for TypeScript
    // const posts = useAppSelector(state => state.posts);
    // 作者建議在slice export一個變出，這樣如果state的shape改變了，只要改slice就好，不用每個component都改
    const posts = useAppSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.content.substring(0, 100)}</h3>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    ));
    return <>
        <section>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    </>;
};

export default PostList;