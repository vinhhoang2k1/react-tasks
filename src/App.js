import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import './assets/style.css';

function App() {
  const [tasks, setTasks] = useState([
    { desc: "Learn React", id: 1, date: "2021-01-03 10:00", status: "Complete" },
    { desc: "Profit", id: 2, date: "2021-01-05 15:00", status: "Open" },
  ]);
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </div>

  );
}

export default App;
