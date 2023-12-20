import React, { useEffect, useState } from "react";
import { FiList, FiPlus, FiImage, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "./dashboard.css";

import api from "../../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/tasks");
        const data = response.data;
        setTasks(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className='content'>
        <Title name='LISTA DE TAREFAS'>
          <FiList size={25} />
        </Title>

        <>
          <Link to='/newtask' className='new'>
            <FiPlus color='#FFF' size={20} />
            NOVA TAREFA
          </Link>

          <table>
            <thead>
              <tr>
                <th scope='col'>Tarefa</th>
                <th scope='col'>Status</th>
                <th scope='col'>Imagem</th>
                <th scope='col'>#</th>
                <th scope='col'>Ação</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td data-label='Tarefa'>{task.name}</td>
                  <td data-label='Status'>
                    <span
                      className='badge'
                      style={{
                        backgroundColor: task.status ? "#5cb85c" : "#d9534f",
                      }}
                    >
                      {task.status ? "Finalizado" : "Pendente"}
                    </span>
                  </td>

                  <td data-label='Imagem'>
                    {task.image ? (
                      <img
                        src={task.image}
                        alt='Imagem da Tarefa'
                        className='task-image'
                        style={{ width: 29, height: 29 }}
                      />
                    ) : (
                      <button className='action-image'>
                        <FiImage size={29} />
                      </button>
                    )}
                  </td>
                  <td data-label='#'>
                    <button
                      className='action'
                      style={{ backgroundColor: "#f6a935" }}
                    >
                      <FiEdit2 color='#FFF' size={16} />
                    </button>
                  </td>
                  <td data-label='ação'>
                    <button className='btn-action'>
                      {task.status ? "Concluída" : "Concluir"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}

export default Dashboard;
