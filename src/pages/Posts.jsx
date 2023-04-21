import { useEffect, useState } from 'react';
import { PostCard } from '../components/postCard/PostCard';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(response => response.json())
      .then(data => setPosts(data.data.posts))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="posts">
      {console.log(posts)}
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
