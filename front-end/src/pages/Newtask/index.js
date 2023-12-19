import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Title from "../../components/Title";
import Header from "../../components/Header";
import { FiEdit, FiUpload } from "react-icons/fi";
import upload from "../../assets/upload.png";

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
      if (
        arquivoImagem.type === "image/jpeg" ||
        arquivoImagem.type === "image/png" ||
        arquivoImagem.type === "image/jpg"
      ) {
        setImage(URL.createObjectURL(arquivoImagem));
        toast.success("Imagem carregada com sucesso!");
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

  const handleSave = async function (e) {
    e.preventDefault();

    if (!descricao || !image) {
      toast.error("Preencha todos os campos antes de salvar.");
      return;
    }

    const taskData = {
      descricao: descricao,
      status: status,
      imagemUrl: image,
    };

    try {
      // Lógica para salvar a tarefa, incluindo a imagem
      // Substitua isso com a lógica real de interação com o seu banco de dados
      console.log("Dados da Tarefa:", taskData);

      // Simulando uma operação assíncrona (pode ser uma chamada à API, operação no banco de dados, etc.)
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000); // Simulando um atraso de 1 segundo
      });

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
