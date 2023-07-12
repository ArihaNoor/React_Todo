import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import HeaderImage from "../../Assets/header.png";

const Header = ({ inputValue, handleInputChange, addTodo, Search }) => {
  const HandleAddtodo = () => {
    addTodo();
  };
  return (
    <div id="header">
      <img src={HeaderImage} alt="HeaderImage" className="header-image"></img>
      <div id="header-content">
        <input
          type="text"
          id="text-input"
          className="col-md-5 col-sm-3 col-lg-6"
          onChange={handleInputChange}
          placeholder="Add Task"
        />
        <button className="btn btn-primary btn-add" onClick={HandleAddtodo}>
          <i className="fa fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="input-group search">
        <div class="form-outline">
          <input
            id="search-input"
            type="search"
            className="form-control"
            placeholder="Search"
            onChange={Search}
          />
        </div>
        <button id="search-button" type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
