import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from '../PostItem/PostItem';

export default function PostList({ deletePost, posts, title }) {
  if (!posts.length) {
    return <h1>Посты не найдены! </h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem deletePost={deletePost} post={post} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
