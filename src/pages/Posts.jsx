import { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter/PostFilter';
import PostForm from '../components/PostForm/PostForm';
import PostList from '../components/PostList/PostList';
import ButtonAction from '../components/UI/ButtonAction/ButtonAction';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import useFetching from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  // Кастомный хук для получения списка найденных и отсортированных постов
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // Кастомный хук для отображения индикатора загрузки и обработки ошибки
  const [fetchPosts, isPostsLoading, postsLoadingError] = useFetching(
    async () => {
      const postsFromApi = await PostService.getAll();
      setPosts(postsFromApi);
    },
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false); // скрыть модальное окно
  };

  // Получаем пост из дочернего элемента
  const deletePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="wrapper">
      <ButtonAction style={{ marginBottom: 15 }} onClick={() => setModal(true)}>
        Создать пост
      </ButtonAction>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />

      {postsLoadingError && (
        <h1 style={{ color: 'red' }}>
          Произошла ошибка:
          {postsLoadingError}
        </h1>
      )}
      {isPostsLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      )}
    </div>
  );
}

export default Posts;
