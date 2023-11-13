import React from "react";
import style from './List.module.scss';
import Item from "./Item";

function List() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: 'Typescript',
    tempo: '03:00:00'
  }]

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            {...item}
          />
          // <li key={index} className={style.item}>
          //   <h3> {item.tarefa} </h3>
          //   <span> {item.tempo} </span>
          // </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;