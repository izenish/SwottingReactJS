// import logo from './logo.svg';
// import './App.css';
// https://flatuicolors.com/palette/defo for UI colors.
import { useState, useEffect } from "react";
import Header from "./components/Headers.jsx";
import Footer from "./components/Footer.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTasks from "./components/AddTasks.jsx";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);
  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Add task
  const addTasks = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // console.log(task)
    // const id=Math.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    // setTasks([...tasks,newTask])
  };

  // Deleter
  const remover = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    // console.log('Deleted',id)
    // setTasks(tasks.filter((task)=>task.id!==id))
  };
  // Double Tap Changer
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <h1 style={{ color: "#1abc9c", backgroundColor: "#34495e" }}>
          Hey I am a React APP
        </h1>
        <Header
          title="Version 2"
          onAdd={() => setShowAddTask(!showAddTask)}
          show={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTasks onAdd={addTasks} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  remove={remover}
                  onToggle={toggleReminder}
                />
              ) : (
                "No due tasks"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
