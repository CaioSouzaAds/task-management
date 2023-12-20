import React, { useEffect, useState } from "react";
import { FiList, FiPlus, FiImage, FiEdit2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Header from "../../components/Header";
import Title from "../../components/Title";
import api from "../../services/api";
import "./dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/tasks");
        const data = response.data;
        setTasks(data);
        //console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error.message);
      }
    }

    fetchData();
  }, []);

  const handleConcluirClick = async (task) => {
    try {
      const taskData = {
        image: task.image,
        name: task.name,
        status: !task.status,
      };

      await api.put(`/tasks/${task.id}`, taskData);

      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === task.id ? { ...t, status: !t.status } : t
        )
      );

      toast.success("Tarefa concluída/atualizada com sucesso!");
    } catch (error) {
      toast.error("Erro ao concluir/atualizar tarefa. Tente novamente.");
      console.error("Erro ao enviar dados para a API:", error.message);
    }
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

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
                <th scope='col'>Ações</th>
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
                        style={{ width: 29, height: 29, cursor: "pointer" }}
                        onClick={() => openLightbox(task.image)}
                      />
                    ) : (
                      <button
                        className='action-image'
                        onClick={() => openLightbox(null)}
                      >
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
                  <td data-label='Ações'>
                    <button
                      className={`btn-action ${task.status ? "concluido" : ""}`}
                      onClick={() => handleConcluirClick(task)}
                      disabled={task.status}
                    >
                      {task.status ? "Concluída" : "Concluir"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {lightboxOpen && (
            <Lightbox
              mainSrc={lightboxImage}
              onCloseRequest={() => setLightboxOpen(false)}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default Dashboard;
