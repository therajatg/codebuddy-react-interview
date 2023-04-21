import { useEffect, useState } from 'react';
import { PostCard } from '../../components/postCard/PostCard';
import style from './posts.module.css';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(response => response.json())
      .then(data => setPosts(data.data.posts))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={style.postsContainer}>
      {posts?.map(post => (
        <PostCard
          key={post.id}
          image={post.image}
          firstName={post.firstName}
          lastName={post.lastName}
          writeup={post.writeup}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
};
