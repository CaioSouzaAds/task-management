import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../../components/Title";
import Header from "../../components/Header";
import { FiEdit } from "react-icons/fi";

function NewTask() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Lógica para salvar a tarefa

    // Exemplo: Suponha que houve um erro ao salvar
    const saveError = false;

    if (saveError) {
      toast.error("Erro ao salvar a tarefa");
    } else {
      toast.success("Tarefa salva com sucesso");

      navigate("/");
    }
  };

  return (
    <div>
      <Header />

      <div className='content'>
        <Title>
          <FiEdit size={25} /> <span>NOVA TAREFA</span>
        </Title>
        <button onClick={handleSave}>Salvar</button>
        <Link to='/'>Cancelar</Link>
      </div>
    </div>
  );
}

export default NewTask;
