import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiList, FiPlus, FiImage, FiEdit2 } from "react-icons/fi";
import { toast } from "react-toastify";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Header from "../../components/Header";
import Title from "../../components/Title";
import api from "../../services/api";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../../redux/task/slice";
import "./dashboard.css";

const STATUS_COLOR = {
  finished: "#5cb85c",
  pending: "#d9534f",
};

const TaskImage = ({ image, openLightbox }) => {
  if (image) {
    return (
      <img
        src={image}
        alt='Imagem da Tarefa'
        className='task-image'
        style={{ width: 29, height: 29, cursor: "pointer" }}
        onClick={() => openLightbox(image)}
      />
    );
  } else {
    return (
      <button className='action-image' onClick={() => openLightbox(null)}>
        <FiImage size={29} />
      </button>
    );
  }
};

function Dashboard() {
  const { listTasks, loading } = useSelector((rootReducer) => rootReducer.task);

  const dispatch = useDispatch();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  function handleDataTask() {
    try {
      console.log("Início da handleDataTask");
      dispatch(fetchTasks(listTasks));
      console.log(listTasks);

      console.log("Fim da handleDataTask");
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error.message);
    }
  }

  useEffect(() => {
    handleDataTask();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConcluirClick = async (task) => {
    try {
      const taskData = {
        image: task.image,
        name: task.name,
        status: !task.status,
      };

      await api.put(`/tasks/${task.id}`, taskData);

      handleDataTask();
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
        <Title>
          <FiList size={30} /> <span>LISTA TAREFAS</span>
        </Title>

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
            {loading && <strong>Carregando Usuários...</strong>}
            {!loading &&
              listTasks.map((task) => (
                <tr key={task.id}>
                  <td data-label='Tarefa'>{task.name}</td>
                  <td data-label='Status'>
                    <span
                      className='badge'
                      style={{
                        backgroundColor: task.status
                          ? STATUS_COLOR.finished
                          : STATUS_COLOR.pending,
                      }}
                    >
                      {task.status ? "Finalizado" : "Pendente"}
                    </span>
                  </td>

                  <td data-label='Imagem'>
                    <TaskImage image={task.image} openLightbox={openLightbox} />
                  </td>
                  <td data-label='#'>
                    <Link
                      to={`/edit/${task.id}`}
                      className='action'
                      style={{ backgroundColor: "#f6a935" }}
                    >
                      <FiEdit2 color='#FFF' size={16} />
                    </Link>
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
      </div>
    </div>
  );
}

export default Dashboard;
