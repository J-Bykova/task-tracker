import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";


export default function App() {
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: false,
      },
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
        />
      ) : ('no tasks to show')}
    </div>
  );
}
