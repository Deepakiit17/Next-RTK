"use client";

import { addUser } from "@/redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch.apply(addUser(name));
  };
  return (
    <div className="add-user">
      <h3>User List</h3>
      <input
        className="add-user-input"
        type="text"
        placeholder="Add New User"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="add-user-btn" onClick={userDispatch}>
        Add User
      </button>
    </div>
  );
}
