import React from "react";
import { FiList, FiPlus, FiImage, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "./dashboard.css";

function Dashboard() {
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
              <tr>
                <td data-label='Tarefa'>Tarefa A</td>
                <td data-label='Status'>
                  <span className='badge' style={{ backgroundColor: "#999" }}>
                    Pendente
                  </span>
                </td>

                <td data-label='Imagem'>
                  <button className='action-image'>
                    <FiImage size={29} />
                  </button>
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
                  <button className='btn-action'>Concluir</button>
                </td>
              </tr>

              <tr>
                <td data-label='Tarefa'>Tarefa B</td>
                <td data-label='Status'>
                  <span className='badge' style={{ backgroundColor: "#999" }}>
                    Finalizado
                  </span>
                </td>

                <td data-label='Imagem'>
                  <FiImage size={29} />
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
                  <button className='btn-action'>Concluída</button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}

export default Dashboard;
