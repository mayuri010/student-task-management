import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("lData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
    // console.log('click from dashboard');
  };
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask} />
      <h1>My Task </h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
