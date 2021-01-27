import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
