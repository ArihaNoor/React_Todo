import Main from '../../Assets/main.png';
import {Link} from 'react-router-dom'
import './FirstScreen.css';

const FirstScreen = () => {
    return(
        <div id="main-content">
            <h1 className="main-heading">Todo List</h1>
            <img src={Main} className="main-image" alt="img"></img>
            <p>Create Your Personalized Routine to Stay Productive</p>
            <Link to="/addtodos"><button className="main-btn btn btn-primary">Set Up Todos</button></Link>
        </div>
    );
}

export default FirstScreen;