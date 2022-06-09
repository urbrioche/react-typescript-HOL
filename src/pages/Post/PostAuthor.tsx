import {useAppSelector} from "../../app/hooks";
import {selectAllUsers} from "./usersSlice";

const PostAuthor = ({userId}: { userId: string }) => {
    const users = useAppSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);

    return <span>
        {author ? author.name : 'Unknown author'}
    </span>;

};

export default PostAuthor;