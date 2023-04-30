import React, { useState } from "react";

// import { v4 as uuidv4 } from "uuid";

import Tasks from "../components/Tasks";

import "../App.css";
import AddTask from "../components/AddTask";
import Header from "../components/Header";

import { Link } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Arroz",
      completed: false,
    },
    {
      id: "2",
      title: "Feijão",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="btnVoltar">
        <button
          style={{
            fontWeight: "bold",
            padding: "5px",
            border: "none",
            borderRadius: "8px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "limegreen",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/menu"
          >
            Voltar
          </Link>
        </button>
      </div>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
};

export default App;
