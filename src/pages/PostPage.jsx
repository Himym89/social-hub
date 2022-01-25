import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import useFetching from '../hooks/useFetching';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, postLoadingError] = useFetching(
    async (id) => {
      const postFromApi = await PostService.getById(id);
      setPost(postFromApi);
    },
  );

  const [fetchComments] = useFetching(async (id) => {
    const commentsFromApi = await PostService.getCommentsByPostId(id);
    setComments(commentsFromApi);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className="post-page__wrapper">
      {postLoadingError && (
        <h1 style={{ color: 'red' }}>
          Произошла ошибка:&nbsp;
          {postLoadingError}
        </h1>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ marginBottom: 15 }}>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
        </div>
      )}

      <h2 style={{ marginBottom: 15 }}>Комментарии</h2>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: 15 }}>
          <h4>{comment.email}</h4>
          <div>{comment.body}</div>
        </div>
      ))}
    </div>
  );
}
