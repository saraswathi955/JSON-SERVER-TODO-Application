import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [todo, setTodo] = useState({
    title: "",
    author: "",
    
  });
  
  const { title, author } = todo;
  const onInputChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/todo", todo);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="name" name="title" value={title} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="author" name="author" value={author} onChange={e => onInputChange(e)} />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
