import { useNavigate } from 'react-router-dom';
import ButtonAction from '../UI/ButtonAction/ButtonAction';

function PostItem({ deletePost, post, number }) {
  // React Router v6 uses useNavigate instead of useHistory
  const navigate = useNavigate();

  const openPostHandler = () => {
    navigate(`/posts/${post.id}`);
  };

  const deletePostHandler = () => {
    deletePost(post);
  };

  return (
    <div className="post">
      <div className="post__content">
        <span className="title">
          {number}
          {'. '}
          {post.title}
        </span>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <ButtonAction style={{ marginRight: 4 }} onClick={openPostHandler}>
          Открыть
        </ButtonAction>
        <ButtonAction onClick={deletePostHandler}>Удалить</ButtonAction>
      </div>
    </div>
  );
}

export default PostItem;
