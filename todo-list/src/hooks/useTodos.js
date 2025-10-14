import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}`);
        setTodos(response.data.todos);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };


 const toggleTodo = async (id) => {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  if (todo.id <= 150) {
    try {
      await axios.put(`${API_URL}/${id}`,
        { completed: !todo.completed },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      setError(err);
    }
  }

  setTodos(prev =>
    prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  );
};

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      todo: text,
      completed: false,
      userId: 1,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return { todos, isLoading, error, deleteTodo, toggleTodo, addTodo };
}
