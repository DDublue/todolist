import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <main className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden">
      <InputTodo />
      <ListTodos />
    </main>
  )
};

export default App;
