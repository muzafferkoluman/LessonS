import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const fetchTodos = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const fetchedTodos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text,
    }));
    setTodos(fetchedTodos as Todo[]);
  };

  const addTodo = async () => {
    if (newTodo.trim()) {
      const docRef = await addDoc(collection(db, "todos"), { text: newTodo });
      setTodos([...todos, { id: docRef.id, text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => deleteTodo(todo.id)}>Deleted</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
