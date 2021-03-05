import React from "react";
import './App.css';
import useDraggable from "./useDraggable"

const list = [
  {
    title: "Adidas",
    src:
      "https://corunco.com/wp-content/uploads/2016/10/adidas-black-vector-logo-400x400.png"
  },
  {
    title: "Starbucks",
    src:
      "https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-5.png"
  },
  {
    title: "Nike",
    src:
      "https://www.designwizard.com/wp-content/uploads/2019/10/Nike-Logo.png"
  },
]

function cls(def, conditions) {
  const list = [def];
  conditions.forEach(cond => {
    if (cond[0]) {
      list.push(cond[1]);
    }
  });
  return list.join(" ");
}

export default function App() {
  return (
    <div className="App">
      <DraggableList list={list} />
    </div>
  );
}

function DraggableList({ list }) {

  const { dragList, createDraggerProps, createDropperProps } = useDraggable(list);

  return dragList.map((item, i) => {
    if (item.type === "BAR") {
      return <Bar id={i} {...createDropperProps(i)} key={item.id} />
    } else {
      return (
        <Draggable {...createDraggerProps(i)}>
          <Card {...item.data} />
        </Draggable>
      )
    }
  })
}

function Draggable({ children, eventHandlers, dragging, id }) {
  return (
    <div {...eventHandlers} draggable={true} className={cls("draggable", [dragging === id, "dragging"])}>{children}</div>
  )
}

function Bar() {
  return <div className="draggable-bar"></div>
}

function Card({ title, src }) {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <span>{title}</span>
    </div>
  )
}

