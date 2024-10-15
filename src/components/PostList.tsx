import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    if (!data.ok) {
      throw new Error("not data");
    }
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
