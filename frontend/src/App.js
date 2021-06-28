import Todo from "./components/Todo";
import Header from "./components/Header";

function App(props) {
  return (
    <main className="container">
      <Header />
      <Todo />
    </main>
  )
}

export default App;