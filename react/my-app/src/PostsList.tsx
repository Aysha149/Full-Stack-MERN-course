import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  let fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let postsData = await response.json();

    setPosts(postsData);
  };

  return (
    <div className="p-3">
      <h2 className="mb-4 text-secondary">List of Posts</h2>
      <button className="btn btn-info my-3" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <h3 className="fw-bold">{post.title}</h3>
            <p className="text-danger">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;