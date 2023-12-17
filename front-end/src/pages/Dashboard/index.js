import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiList } from "react-icons/fi";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Header />

      <div className='content'>
        <Title>
          <FiList size={25} />
          <span>LISTA DE TAREFAS</span>
        </Title>
        <Link to='/newtask'>
          <button>Nova tarefa</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
