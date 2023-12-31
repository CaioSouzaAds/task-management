import avatarImg from "../../assets/avatar.png";
import { Link } from "react-router-dom";

import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import "./header.css";

export default function Header() {
  return (
    <div className='sidebar'>
      <div>
        <img src={avatarImg} alt='Foto do usuario' />
      </div>

      <Link to=''>
        <FiHome color='#FFF' size={24} />
        Suporte
      </Link>

      <Link to=''>
        <FiUser color='#FFF' size={24} />
        Clientes
      </Link>

      <Link to=''>
        <FiSettings color='#FFF' size={24} />
        Perfil
      </Link>
    </div>
  );
}
