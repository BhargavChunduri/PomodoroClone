import "./modal.css";


function Modal({closeModal} : {closeModal : React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <>
      <div className="modalContainer">
        <div className="title">
          <p className="titleText">Settings</p>
          <span className="modalCross" onClick={()=>{closeModal(false)}}>X</span>
        </div>
        <div className="body">kkk</div>
        <div className="footer">
          <button className="cancelBtn" onClick={()=>{closeModal(false)}}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
