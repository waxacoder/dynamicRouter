import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
export const Home = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(URL_USERS);
    const data = await response.json();
    setUsers(data);
  };
  const fetchPosts = async () => {
    const response = await fetch(URL_POSTS);
    const data = await response.json();
    setPosts(data);
  };

  const fetchAlbums = async () => {
    const response = await fetch(URL_ALBUMS);
    const data = await response.json();
    setAlbums(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <div className={styles.flex}>
        <p>Users</p>
        <p>Posts</p>
        <p>Albums</p>
      </div>
      <div className={styles.flex}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <ul>
            {albums.slice(0, 10).map((album) => (
              <li key={album.id}>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
