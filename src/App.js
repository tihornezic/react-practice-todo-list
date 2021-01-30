import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(true)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5001/tasks')
    // to convert JSON to JS object
    const data = await response.json()

    return data
  }

  // fatch a task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5001/tasks/${id}`)
    const data = await response.json()

    return data
  }

  // toggle reminder
  const toggleReminder = async function (id) {
    // in order to toggle reminder on a specific task,
    // need to create a fetch for a single task
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const response = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(tasks.map((task) =>
      task.id === id ? {...task, reminder: data.reminder} : task
    ))
  }

  // delete tast
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5001/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // convert it to JSON
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data])

    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]) */
  }

  return (
    // to use router, wrap everything inside router
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder}
              onDelete={deleteTask} /> : <div className='no-to-do'>No Tasks To Do!</div>}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
