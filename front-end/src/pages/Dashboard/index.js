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
        <Title name='LISTA DE TAREFAS'>
          <FiList size={25} />
        </Title>
        <Link to='/newtask'>
          <button>Nova tarefa</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
