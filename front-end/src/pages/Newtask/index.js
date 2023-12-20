import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEdit, FiUpload } from "react-icons/fi";
import Title from "../../components/Title";
import Header from "../../components/Header";
import upload from "../../assets/upload.png";
import api from "../../services/api";

import "./newtask.css";

function NewTask() {
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleImageChange = (e) => {
    const arquivoImagem = e.target.files[0];

    if (arquivoImagem) {
      if (isImageValid(arquivoImagem)) {
        setImage(URL.createObjectURL(arquivoImagem));
      } else {
        toast.error("Por favor, selecione uma imagem jpg, jpeg ou png.");
        setImage(null);
        return;
      }
    } else {
      toast.error("Nenhum arquivo selecionado.");
      setImage(null);
    }
  };

  const isImageValid = (imageFile) => {
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    return validFormats.includes(imageFile.type);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!descricao || !image) {
      toast.error("Preencha todos os campos antes de salvar.");
      return;
    }

    const taskData = {
      name: descricao,
      status: status === "Finalizada",
      image: image,
    };

    try {
      console.log(taskData);
      await api.post("/tasks", taskData);

      toast.success("Tarefa salva com sucesso");
      navigate("/");
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
      toast.error("Erro ao salvar a tarefa");
    }
  };

  const handleCancelar = () => {
    toast.warning("Ação cancelada");
    navigate("/");
  };

  return (
    <div>
      <Header />

      <div className='content'>
        <Title name='NOVA TAREFA'>
          <FiEdit size={25} />
        </Title>

        <div className='container'>
          <form className='form-task' onSubmit={handleSave}>
            <input
              placeholder='Descrição'
              type='text'
              value={descricao}
              onChange={handleDescricaoChange}
              className='input-text'
            />

            <select
              value={status}
              onChange={handleStatusChange}
              className='select-dropdown'
            >
              <option value='Pendente'>Pendente</option>
              <option value='Finalizada'>Finalizada</option>
            </select>

            <label className='label-upload'>
              <span>
                <FiUpload size={25} />
              </span>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
              />
              {image ? (
                <img src={image} alt='foto-upload' className='image-preview' />
              ) : (
                <img src={upload} alt='foto-upload' className='image-preview' />
              )}
            </label>

            <div className='button-container'>
              <button type='submit' className='btn-salvar'>
                Salvar
              </button>

              <button
                type='button'
                className='btn-cancelar'
                onClick={handleCancelar}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
