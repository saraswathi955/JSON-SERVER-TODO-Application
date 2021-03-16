import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [todo, setTodo] = useState({
    title: "",
    author: "",
    
  });

  const { title, author } = todo;
  const onInputChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTodo();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/todo/${id}`, todo);
    history.push("/");
  };

  const loadTodo = async () => {
    const result = await axios.get(`http://localhost:3003/todo/${id}`);
    setTodo(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="name" name="name" value={title} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="author" name="name" value={author} onChange={e => onInputChange(e)} />
          </div>   
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
