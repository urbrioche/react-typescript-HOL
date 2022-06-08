import AddPostForm from "./AddPostForm";
import PostList from "./PostList";
import './index.css';

const Post = () => {
    return <>
        <main className="main">
            <AddPostForm/>
            <PostList/>
        </main>
    </>;
};

export default Post;