import Modal from '../modal/Modal';
import { useState } from 'react';
import './header.css'

function Header() {
  const [openModal , setOpenModal] = useState(false);
  return (
    <>
      <div className="header">
        <h1> pomofocus</h1>
        <ol className='rightList'>
          <li>Report</li>
          <li onClick={()=>{setOpenModal(true)}}>Settings</li>
          {openModal && <Modal closeModal = { setOpenModal} />}
          <li>Login</li>
        </ol>
      </div>
    </>
  );
}

export default Header;
