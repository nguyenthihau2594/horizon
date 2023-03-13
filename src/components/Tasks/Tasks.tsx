
import s from "./Tasks.module.scss";
import cx from "classnames"
import { useEffect, useState } from "react";

const TasksList = [
  {
    name: "Landing Page Design",
    id: "check_task1"
  },
  {
    name: "Dashboard Builder",
    id: "check_task2"
  },
  {
    name: "Mobile App Design",
    id: "check_task3"
  },
  {
    name: "Illustrations",
    id: "check_task4"
  },
  {
    name: "Promotional LP",
    id: "check_task5"
  }
]

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(TasksList as any);
  }, [])

  const handChange = (e : any) =>{
    const { id, checked } = e.target;
    if (id === "checkall") {
      
      let temp = tasks.map((task : any) => {
        return { ...task, isChecked: checked };
      });
      setTasks(temp as any);
    } else {
      let temp= tasks.map((task : any) =>
        task.id === id ? { ...task, isChecked: checked } : task
      );
      setTasks(temp as any);
    }
  }

  return <div className={s.tasks_wrap}>
    <div className={s.checkall}>
      <input type="checkbox" id="checkall" className={cx(s.inp_checkbox, s.inp_checkall)}
            checked={!tasks.some((task : any) => task?.isChecked !== true)}
        onChange={handChange} />
      <label htmlFor="checkall" className={cx(s.inp_label, s.inp_labelall)}>Tasks</label>
    </div>
    <ul className={s.tasks_list}>
      {tasks.map((item : any, index : number) => {
        return (
          <li className={s.tasks_item} key={index}>
            <input type="checkbox" id={item.id} className={cx(s.inp_checkbox)}
              checked={item?.isChecked || false}
              onChange={handChange} />
            <label htmlFor={item.id} className={s.inp_label}>{item.name}</label>
            <button type="button" className={s.btn_more}></button>
          </li>
        )
      })}
    </ul>
    <button type="button" className={s.btn_more_all}></button>
  </div>
}
