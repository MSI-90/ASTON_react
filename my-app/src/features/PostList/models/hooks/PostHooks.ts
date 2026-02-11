import {useEffect, useState} from "react";

export function useUserPosts(userId: number) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      const data = await res.json();
      setPosts(data);
    }

    load();
  }, [userId]);

  return { posts };
}