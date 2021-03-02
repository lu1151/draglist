import logo from './logo.svg';
import './App.css';

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


function App() {
  return (
    <div>
      <Card {...list[0]} />
    </div>
  );
}

function DraggableList({ list }) {
  return (
    <div className="draggable-list">

    </div>
  )
}

function Draggable({ children }) {
  return (
    <div className="draggable">{children}</div>
  )
}

function Bar() {

}

function Card({ title, src }) {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <span>{title}</span>
    </div>
  )
}

export default App;
