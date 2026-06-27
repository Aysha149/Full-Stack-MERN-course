import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);


  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);

  };

  return (
    <div className="container">
      <h2 className="text-warning mb-4 text-center">Post List Component</h2>

      <button className="btn btn-info mb-3" onClick={fetchPosts}>
        Fetch Posts
      </button>

      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h4 className="text-warning">{post.title}</h4>
            <p className="text-muted">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;