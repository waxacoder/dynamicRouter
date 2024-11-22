import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
export const User = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  
  const fetchUser = async () => {
    const response = await fetch(`${URL_USERS}/${userId}`);
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
    </div>
  );
};
