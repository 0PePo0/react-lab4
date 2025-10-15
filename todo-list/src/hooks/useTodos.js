import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

export default function useTodos(initialLimit = 10) {
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(initialLimit);
  const [totalTodos, setTotalTodos] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}?limit=150`);
      setAllTodos(response.data.todos);
      setTotalTodos(response.data.total);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  useEffect(() => {
    let data = allTodos;

    if (searchTerm.trim() !== "") {
      data = data.filter(todo =>
        todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const start = (currentPage - 1) * limitPerPage;
    const end = start + limitPerPage;
    setTodos(data.slice(start, end));

    setTotalTodos(data.length);
  }, [allTodos, currentPage, limitPerPage, searchTerm]);

  const goToNextPage = () => {
    if (currentPage * limitPerPage < totalTodos) setCurrentPage(prev => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const setLimit = (limit) => {
    setLimitPerPage(limit);
    setCurrentPage(1);
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), todo: text, completed: false, userId: 1 };
    setAllTodos(prev => [newTodo, ...prev]);
    setCurrentPage(1);
  };

  const deleteTodo = async (id) => {
    setIsLoading(true);
    try {
      if (id <= 150) await axios.delete(`${API_URL}/${id}`);
      setAllTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTodo = async (id) => {
    const todo = allTodos.find(t => t.id === id);
    if (!todo) return;

    if (todo.id <= 150) {
      try {
        await axios.put(`${API_URL}/${id}`, { completed: !todo.completed });
      } catch (err) {
        setError(err);
      }
    }

    setAllTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodoTitle = async (id, newTitle) => {
    const todo = allTodos.find(t => t.id === id);
    if (!todo) return;

    if (todo.id <= 150) {
      try {
        await axios.put(`${API_URL}/${id}`, { todo: newTitle });
      } catch (err) {
        setError(err);
        return;
      }
    }

    setAllTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, todo: newTitle } : t))
    );
  };

  return {
    todos,
    isLoading,
    error,
    currentPage,
    limitPerPage,
    totalTodos,
    searchTerm,
    setSearchTerm,
    goToNextPage,
    goToPrevPage,
    setLimit,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodoTitle,
  };
}
