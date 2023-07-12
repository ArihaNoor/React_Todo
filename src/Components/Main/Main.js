import Header from "../Header/Header.js";
import Body from "../Body/Body.js";
import { useState } from "react";
import "./Main.css";

const Main = () => {
  const initialTodoData = [
    {
      id: 123456,
      text: "Task 1",
    },
    {
      id: 654321,
      text: "Task 2",
    },
    {
      id: 345678,
      text: "Task 3",
    },
  ];
  const [todos, setTodos] = useState(initialTodoData);
  const [inputValue, setInputValue] = useState("");
  const [searchVariable, setSearchVariable] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [boolValue, setBoolValue] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const DeleteTodo = (delId) => {
    setTodos(todos.filter((todo) => todo.id !== delId));
  };

  const AddTodo = () => {
    const newID = Math.floor(100000 + Math.random() * 900000);
    const newTodo = {
      id: newID,
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const updateTodo = (updateId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updateId) {
        return {
          ...todo,
          text: inputValue,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setInputValue("");
    setBoolValue(false); 
  };
  

  const Search = (e) => {
    setSearchVariable(e.target.value);
    const filteredData = todos.filter((todo) =>
      todo.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedData(filteredData);
  };

  return (
    <div id="main">
      <Header
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        addTodo={AddTodo}
        Search={Search}
      />
      <Body
        todoData={searchedData.length > 0 ? searchedData : todos}
        update={updateTodo}
        handleInputChange={handleInputChange}
        deleteTodo={DeleteTodo}
      />
    </div>
  );
};

export default Main;
