import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go get woods',
      date: '26/01/2020 at 16:00',
      reminder: false
    },
    {
      id: 2,
      text: 'Wash the dishes',
      date: '26/01/2020 at 17:00',
      reminder: false
    },
    {
      id: 3,
      text: 'Iron the clothes',
      date: '26/01/2020 at 19:00',
      reminder: false
    }
  ])

  const toggleReminder = function(id) {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
    </div>
  );
}

export default App;
