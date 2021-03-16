import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // console.log("step1");
    loadTodo();
  }, []);

  const loadTodo = async () => {
    const result = await axios.get("http://localhost:3003/todo");
    // console.log(result);
    setTodo(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/todo/${id}`);
    loadTodo();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/${user.id}`}> View </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}> Edit </Link>
                  <Link class="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
