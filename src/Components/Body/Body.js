import "./Body.css";
import { useState } from "react";

const Body = ({ todoData, update, handleInputChange, deleteTodo }) => {
  const [boolValue, setBoolValue] = useState(false);
  const [updateId, setUpdateId] = useState();

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Todo Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoData.length > 0 ? (
            todoData.map((todo) => (
              <tr key={todo.id}>
                <td id="tableInput">
                  {boolValue && updateId === todo.id ? (
                    <input
                      type="text"
                      id="changedInput"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <>{todo.text}</>
                  )}
                </td>
                <td id="action-btn">
                  <button
                    id="btn-edit"
                    onClick={() => {
                      if (updateId === todo.id && boolValue === true) {
                        update(updateId);
                        setBoolValue(false);
                      } else {
                        setBoolValue(true);
                        setUpdateId(todo.id);
                      }
                    }}
                  >
                    {updateId === todo.id && boolValue === true ? (
                      <i className="fa fa-solid fa-check" />
                    ) : (
                      <i className="fa fa-regular fa-pen-to-square"></i>
                    )}
                  </button>

                  <button id="btn-delete" onClick={() => deleteTodo(todo.id)}>
                    <i className="fa-solid fa-eraser"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Todos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Body;
