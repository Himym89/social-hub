import { useState } from 'react';
import ButtonAction from '../UI/ButtonAction/ButtonAction';
import InputText from '../UI/InputText/InputText';

export default function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: '', body: '' });

  const createNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: new Date(),
    };
    createPost(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <InputText
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        name="title"
        type="text"
        placeholder="Название поста"
      />
      <InputText
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        name="description"
        type="text"
        placeholder="Описание поста"
      />
      <ButtonAction onClick={createNewPost}>Создать пост</ButtonAction>
    </form>
  );
}
