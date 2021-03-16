import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [todo, setTodo] = useState({
    title: "",
    author: "",
   
  });
  const { id } = useParams();
  useEffect(() => {
    loadTodo();
  }, []);
  const loadTodo = async () => {
    const res = await axios.get(`http://localhost:3003/todo/${id}`);
    setTodo(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {todo.name}</li>
        <li className="list-group-item">Author: {todo.username}</li>
      </ul>
    </div>
  );
};

export default User;
