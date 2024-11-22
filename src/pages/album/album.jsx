import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ALBUM_BY_ID = "https://jsonplaceholder.typicode.com/albums";

export const Album = () => {
  const [album, setAlbum] = useState(null);
  const { albumId } = useParams();

  const fetchAlbums = async () => {
    const response = await fetch(`${ALBUM_BY_ID}/${albumId}`);
    const data = await response.json();
    console.log(data);
    setAlbum(data);
  };
  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>{album?.title}</h1>
    </div>
  );
};
