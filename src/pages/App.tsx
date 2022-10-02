import style from './App.module.scss';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';
import { useState } from 'react';
import { ITasks } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState< ITasks[]>([])
  console.log(tasks)
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks = {tasks}/>
      <Timer/>
    </div>
    
  );
}

export default App;
