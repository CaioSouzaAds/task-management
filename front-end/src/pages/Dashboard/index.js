import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD</h1>

      <Link to='/newtask'>
        <button>Ir para New Task</button>
      </Link>
    </div>
  );
}

export default Dashboard;
